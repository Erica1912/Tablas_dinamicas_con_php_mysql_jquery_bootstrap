<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id= $_POST['id'];
	$n=$_POST['nombre'];
	$a=$_POST['apellido'];
	$e=$_POST['email'];
	$t=$_POST['telefono'];

	$sql = "UPDATE estudiante SET nombre='$n',apellido='$a',email='$e',telefono='$t' WHERE id='$id'";
	echo $result=mysqli_query($conexion, $sql);

?>