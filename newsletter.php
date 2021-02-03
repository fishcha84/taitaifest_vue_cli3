<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="refresh" content="3; url='https://fishcha842.000webhostapp.com/#/'">
</head>
<body>
    
</body>
</html>

<?php

  header('Content-Type: application/json; charset=utf-8');
  header("Access-Control-Allow-Origin: *");
  require_once("conn.php");
  
  $email=$_POST['useremail'];
  $sql="SELECT * FROM taitaifestnewsletter WHERE email='$email'";
  $res=$mysqli->query($sql);

  if(mysqli_num_rows($res)!=0){
    mysqli_free_result($res);
    echo "<script type='text/javascript'>";
    echo "alert('the email has been subscribed!');";
    echo "history.back();";
    echo "</script>";
  }else{
    mysqli_free_result($res);
    $sql2="INSERT INTO taitaifestnewsletter (email) VALUES ('$email')";
    $res2=$mysqli->query($sql2);
    echo "<script type='text/javascript'>";
    echo "alert('subscribe success!');";
    echo "history.back();";
    echo "</script>";
  }
  
  $mysqli->close();

?>
