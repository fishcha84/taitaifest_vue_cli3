<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="refresh" content="0;url='https://fishcha842.000webhostapp.com/#/fountain_headliners/result'"> 
</head>
<body>

</body>
</html>

<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
require_once("conn.php");

$voteforartist = isset($_POST['voteforartist']) ? $_POST['voteforartist'] : array();

if (count($voteforartist ) > 0) { 
  foreach ($voteforartist  as $value) {  
    $sql="UPDATE headliner SET score = score + 1 WHERE artist='$value'";
    $mysqli->query($sql);
  }  
  $mysqli->close();
} else {
}

?>