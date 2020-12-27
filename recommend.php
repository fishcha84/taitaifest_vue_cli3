<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="refresh" content="0;url='https://fishcha842.000webhostapp.com/#/lineup'">
</head>
<body>
    
</body>
</html>

<?php

  header('Content-Type: application/json; charset=utf-8');
  header("Access-Control-Allow-Origin: *");
  require_once("conn.php");

  $recommendartist=$_POST['artist'];
  $sql="SELECT * FROM headliner WHERE artist='$recommendartist'";
  $res=$mysqli->query($sql);
  if (mysqli_num_rows($res)==0){
  mysqli_free_result($res);
  $sql2="INSERT INTO headliner (artist, score) VALUES ('$recommendartist', 0)";
  $res2=$mysqli->query($sql2);
  $res2->free();
  }else{
    echo "<script>
    alert('it is already on the list!'); 
    </script>";
    header("Refresh:3; url=https://fishcha842.000webhostapp.com/#/fountain_headliners/vote_or_make_a_wish");
  }
  $mysqli->close();
    
?>