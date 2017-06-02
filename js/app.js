//Validación del formulario:
var send = document.getElementsByClassName("btn")[0];
send.addEventListener("click", function(e){
 	e.preventDefault();
 	
 	var nombre = document.getElementById("name").value;
 	var email = document.getElementById("email").value;
 	var phone = document.getElementById("phone").value;
 	var message = document.getElementById("message").value;

 	if(nombre == ""){
 		document.getElementById("name").value = "Ingrese su Nombre";
 	}	
 	if(email ==""){
		document.getElementById("email").value = "Ingrese su Email";
 	}
 	if(phone ==""){
		document.getElementById("phone").value = "Ingrese su Teléfono";
 	}
 	if(message == ""){
		document.getElementById("message").value = "· Ingrese su Mensaje";
	}

 	if(nombre != "" && email != "" && phone != "" && message != "") {
 		document.getElementById("name").value ="";
 		document.getElementById("email").value ="";
 		document.getElementById("phone").value ="";
 		document.getElementById("message").value ="";	
 	}		

 })