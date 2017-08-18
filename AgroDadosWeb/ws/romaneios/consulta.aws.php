<?php 
 header('Content-Type: application/json; charset=UTF-8');
 require("facade/ServicoFacilFacade.php");
 $facade = new ServicoFacilFacade; 
 echo $facade->consultaRomaneios($_GET);
 exit();
