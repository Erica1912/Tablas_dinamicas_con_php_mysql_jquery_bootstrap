

function agregardatos(nombre,apellido,email,telefono){

	cadena="nombre=" + nombre + 
			"&apellido=" + apellido +
			"&email=" + email +
			"&telefono=" + telefono;

	$.ajax({
		type:"POST",
		url:"php/agregarDatos.php",
		data:cadena,		
		success:function(r){
			if (r==1) {
				alertify.success("Nuevo registro");
				$('#tabla').load('componentes/tabla.php');
			}else{
				alertify.success("Error");
			}
		}
	});

}

function agregaform(datos){

	d=datos.split('||');
	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#apellidou').val(d[2]);
	$('#emailu').val(d[3]);
	$('#telefonou').val(d[4]);
	
}
function actualizaDatos(){
	
	id=$('#idpersona').val();
	nombre=$('#nombreu').val();
	apellido=$('#apellidou').val();
	email=$('#emailu').val();
	telefono=$('#telefonou').val();

	cadena="id=" + id +
			"&nombre=" + nombre + 
			"&apellido=" + apellido +
			"&email=" + email +
			"&telefono=" + telefono;
	$.ajax({
		type:"POST",
		url:"php/actualizaDatos.php",
		data:cadena,		
		success:function(r){
			if (r==1) {
				alertify.success("actualizado");
				$('#tabla').load('componentes/tabla.php');
			}else{
				alertify.success("no actualizado");
			}			
		}
	});	
}

function preguntarSiNo(id){
	alertify.confirm('Eliminar Dato ', '¿Está seguro de eliminar dato?', 
			function(){ eliminarDatos(id) }
                , function(){ alertify.error('Se cancelo')});
}

function eliminarDatos(id){
	cadena = "id="+id;

	$.ajax({
		type:"POST",
		url:"php/eliminarDatos.php",
		data:cadena,
		success:function(r){
			if (r==1) {
				alertify.success("Eliminado");
				$('#tabla').load('componentes/tabla.php');
			}else{
				alertify.success("No eliminado");
			}		
		}
	})

}