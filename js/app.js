//Validación del formulario:
var send = document.getElementsByClassName("btn")[0];
send.addEventListener("click", function(e){
 	e.preventDefault();
 	
 	var nombre = document.getElementById("name").value;
 	var email = document.getElementById("email").value;
 	var phone = document.getElementById("phone").value;
 	var message = document.getElementById("message").value;

 	if(nombre == ""){
 		document.getElementById("name").value = "Ingrese su nombre, por favor.";
 	}	
 	if(email ==""){
		document.getElementById("email").value = "Ingrese su email, por favor.";
 	}
 	if(phone ==""){
		document.getElementById("phone").value = "Ingrese su teléfono, por favor.";
 	}
 	if(message == ""){
		document.getElementById("message").value = "Ingrese su mensaje, por favor.";
	}

 	if(nombre != "" && email != "" && phone != "" && message != "") {
 		document.getElementById("name").value ="";
 		document.getElementById("email").value ="";
 		document.getElementById("phone").value ="";
 		document.getElementById("message").value ="";	
 	}		

 })