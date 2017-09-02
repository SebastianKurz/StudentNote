			
function Kurs(klasse, name){
	
	this.klasse = klasse;
	this.name = name;
}
			
function neuerKurs(){
	
	var klasse = document.form1.klasse.value;
	var name = document.form1.name.value;
				
	var kurs = new Kurs(klasse, name);
				
	var jsonString = JSON.stringify(kurs);
	var nummer = localStorage.length;
	var key = "kurs"+ nummer;
				
	window.localStorage.setItem(key, jsonString);
	alert("Der Kurs: " + kurs.name + " " + kurs.klasse + " wurde erfolgreich angelegt.");
}