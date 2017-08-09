var loggedIn = window.localStorage.getItem("isLoggedIn");
var jsonstring = window.localStorage.getItem(loggedIn);
var lehrer = JSON.parse(jsonstring);

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
		 var benutzername = document.getElementById("username");
		 var passwort = document.getElementById("passwort");
		 var passwort2 = document.getElementById("passwort2");
		 var vorname = document.getElementById("vname");
		 var nachname = document.getElementById("nname");
		 
		 benutzername.value = lehrer.benutzername;
		 passwort.value = lehrer.passwort;
		 passwort2.value = lehrer.passwort;
		 vorname.value = lehrer.vorname;
		 nachname.value = lehrer.nachname;
   }
 }


function bearbeiten(){
	
	if(document.form1.passwort.value == document.form1.passwort2.value){
		lehrer.benutzername = document.form1.username.value;
		lehrer.passwort = document.form1.passwort.value;
		lehrer.vorname = document.form1.vname.value;
		lehrer.nachname = document.form1.nname.value;
		
		jsonstring = JSON.stringify(lehrer);
		window.localStorage.setItem(loggedIn, jsonstring);
		alert("Benutzer erfolgreich geaendert");
	}
	else alert("Bitte geben Sie zwei mal das gleiche Passwort ein");
}