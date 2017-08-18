<?php
function salvaLog($mensagem) {
   require_once 'database/mysql.php';
   $db = new Mysql;
   $db->connect('user');
   $ip = $_SERVER['REMOTE_ADDR'];
   $userAgent = $_SERVER['HTTP_USER_AGENT'];
   $httpRefer = $_SERVER['HTTP_REFERER'];
   $remoteHost = $_SERVER['REMOTE_HOST'];
   $requestUri = $_SERVER['REQUEST_URI'];
   $hora = date('Y-m-d H:i:s'); 
//   $mensagem = mysql_escape_string($mensagem);
   $sql = "INSERT INTO `logs` VALUES (NULL, '".$hora."', '".
           $ip."', '".$mensagem."', '".$userAgent
           ."', '".$httpRefer."', '".$remoteHost."', '".$requestUri."')";
   $db->query($sql);
   return true;
}