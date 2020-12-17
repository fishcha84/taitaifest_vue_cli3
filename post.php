<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="refresh" content="0;url='https://fishcha842.000webhostapp.com/#/guestbook'">
</head>
<body>

</body>
</html>

<?php
  header('Content-Type: application/json; charset=utf-8');
  header("Access-Control-Allow-Origin: *");
  require_once("conn.php");
  
  $author=$_POST['author'];
  $content=$_POST['content'];
  $posttime = date("Y-m-d H:i:s",(time()+8*3600));
  $sql="INSERT INTO guestbook (author,content,posttime) VALUES('$author','$content','$posttime')";
  $res=$mysqli->query($sql);
  $res->free();
  $mysqli->close();
?>
