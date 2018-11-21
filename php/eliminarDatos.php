<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];
	$sql = "DELETE from estudiante WHERE id='$id'";
	echo $result = mysqli_query($conexion, $sql);

?>