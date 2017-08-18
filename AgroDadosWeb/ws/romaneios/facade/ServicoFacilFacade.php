<?php require_once('database/mysql.php'); 
      require_once 'class/Password.class.php';

class ServicoFacilFacade{
    
 public function consultaRomaneios($_GETE) {
    
    date_default_timezone_set('America/Sao_Paulo');
     
    if (!isset($_GETE)) {
        $erro="HTTP/1.0 404 Not Found<h1>Error 404 Not Found</h1>The page that you have requested could not be found.";
        return $erro;
    } 

    $dataIncial=$_GETE['dtincial'];
    $dataFinal=$_GETE['dtfinal'];
    $cnpj=$_GETE['cnpj'];
    $idBase=$_GETE['idBase'];
    $usuario=$_GETE['usuario'];
    $senha=$_GETE['senha'];
    $cdEmpresa=$_GET['cdEmpresa'];
    
    if (empty($usuario)){
        return json_encode("0#USUARIO OBRIGATORIO",JSON_UNESCAPED_UNICODE);
    }else if(empty($senha)){
        return json_encode("0#SENHA OBRIGATORIA",JSON_UNESCAPED_UNICODE);
    }else if(empty($idBase)){
        return json_encode("0#ID DA BASE OBRIGATORIA",JSON_UNESCAPED_UNICODE);
    }
    
    $envio = "";
    
    $dbUser = new Mysql;
    $dbUser->connect('user');
     
    $sql="select * from user
            where user = '".$usuario."' and senha = '".$senha."' and idBase = '".$idBase."'";
    
    

    $dbUser->query($sql)->fetchAll(); 
    
    $qtRomaneio=0;
    $pesoBruto=0.00;
    $pesoDesconto=0.00;
    $pesoLiquido=0.00;
    $qtdSacas=0;
    $valorTotal=0.00;
    
    if($dbUser->rows > 0){
        $users=$dbUser->data[0];
        
        if($users['in_ativo']==="0"){
            return json_encode("0#USUARIO INATIVO",JSON_UNESCAPED_UNICODE);
        }
        
        $db = new Mysql;
        $db->connect($idBase);
        
        $arrayRomaneio = array();
            
        
        $sql="select * from mov_romaneio where idBase like '".$idBase."'"; 

        if($users['permissaoOperador']==="0"){
           $sql=$sql." and cdFornecedor = ".(int)$users['idClinteFacil'];
        }
        
        if(!empty($cdEmpresa)){
            if($cdEmpresa>0){
                $sql=$sql." and cdEmpresa = ".(int)$cdEmpresa;
            }
        }
        
          
        
        if($dataIncial>0){
            $sql=$sql." and str_to_date(dataEmissao, '%d-%m-%Y') "
                    . " between  str_to_date('".$dataIncial."', '%d-%m-%Y') and str_to_date('".$dataFinal."', '%d-%m-%Y') "
                    . " and dataEmissao not like '0' ";
        }

        $db->query($sql)->fetchAll(); 
        $dataRomaneio=$db->data;
    
        if($db->rows > 0){
            foreach ($dataRomaneio as $romaneio) {
    
                $arrayDescontos = array();
                       
                $sql="select * from mov_romaneio_desc where idRomaneio = ".$romaneio['idRomaneio']." and idBase like '".$idBase."'";
                $db->query($sql)->fetchAll(); 
                $dataDesconto=$db->data;
                if($db->rows > 0){
                    foreach ($dataDesconto as $desconto) {
                        $arrayDescontos[]=$desconto;
                    }
                    $romaneio['descontos']=$arrayDescontos;
                }
                
                if($romaneio['nrDocumento']===""){
                }else{
                    $romaneio['nrDocumento']=explode(",",$romaneio['nrDocumento'],20)[2].'/'.explode(",",$romaneio['nrDocumento'],20)[1];
                }
                
                $sql="select * from mov_romaneio_pdf where idRomaneio = ".$romaneio['idRomaneio']." and idBase like '".$idBase."'";
                $db->query($sql)->fetchAll(); 
                if($db->rows > 0){
                    $romaneio['pdf']="1";
                }
                
                    
                $valorTotal+=$romaneio['vlLiquido'];
                $arrayRomaneio[] = $romaneio;
                $qtRomaneio=$qtRomaneio+1;
                $pesoBruto+=$romaneio['pesoBruto'];
                $pesoDesconto+=$romaneio['pesoDesconto'];
                $pesoLiquido+=$romaneio['pesoLiquido'];
                $qtdSacas+=$romaneio['qtdSaca'];
                    
                $romaneio['vlLiquido']=number_format($romaneio['vlLiquido'], 0, '', '.');
                $romaneio['pesoBruto']=number_format($romaneio['pesoBruto'], 0, '', '.');
                $romaneio['pesoDesconto']=number_format($romaneio['pesoDesconto'], 0, '', '.');
                $romaneio['pesoLiquido']=number_format($romaneio['pesoLiquido'], 0, '', '.');
                $romaneio['qtdSaca']=number_format($romaneio['qtdSaca'], 0, '', '.');

            }
            $envio['romaneios']=$arrayRomaneio;
        }
        
    }else{
        return json_encode("0#NENHUM USER ENCONTRADO",JSON_UNESCAPED_UNICODE);
    }
    
    if($valorTotal>0){
         $valorLiquido=$valorTotal/$pesoLiquido;
    }
   
    $envio['quantidadeRomaneio']=$qtRomaneio;
    $envio['quantidadeBruta']=number_format($pesoBruto, 0, '', '.');
    $envio['quantidadeDesconto']=number_format($pesoDesconto, 0, '', '.');
    $envio['quantidadeLiquida']=number_format($pesoLiquido, 0, '', '.');
    $envio['quantidadeSaca']=number_format($qtdSacas, 0, '', '.');
    $envio['valorTotal']=number_format($valorTotal, 0, '', '.');      
    $envio['valorLiquido']=number_format($valorLiquido, 0, '', '.');
    $envio['retorno']=$envio['retorno']."1#OK PROCESSADO";
      
    return json_encode($envio,JSON_UNESCAPED_UNICODE);
}


}
?>
