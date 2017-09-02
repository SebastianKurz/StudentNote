function Notiz(inhalt, user){
	this.inhalt = inhalt;
	this.user = user;
}

function neueNotiz(){
	var isLoggedIn = window.localStorage.getItem("isLoggedIn");
	var string = window.localStorage.getItem(isLoggedIn);
	var lehrer = JSON.parse(string);
	
	var user = lehrer.vorname + " " + lehrer.nachname + ": "
	var inhalt = document.form1.notiz.value;
	var notiz = new Notiz(inhalt, user);
	
	var selectedSchueler = window.localStorage.getItem("selectedSchueler");
	var nummer = window.localStorage.length;
	var key = selectedSchueler + "notiz" + nummer;
	
	var jsonstring = JSON.stringify(notiz);
	
	window.localStorage.setItem(key, jsonstring);
	alert("Die Notiz: " + "\"" + inhalt + "\" " + key + "wurde erfolgreich angelegt.");
}