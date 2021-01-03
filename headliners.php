<?php

  header('Content-Type: application/json; charset=utf-8');
  header("Access-Control-Allow-Origin: *");

  require_once("conn.php");
  
  $sql="SELECT * FROM headliner ORDER BY score DESC";
  $res=$mysqli->query($sql);
  
  $arr=array();
  while ($row=$res->fetch_assoc()) {
    $arr[]=$row;
  }

  $res->free();
  $mysqli->close();
  
  echo(json_encode($arr));

?>



