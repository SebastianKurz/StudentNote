function Schueler(name, vorname){
	
	this.name = name;
	this.vorname = vorname;
}
			
function neuerSchueler(){
	
	var name = document.form1.name.value;
	var vorname = document.form1.vorname.value;
			
	var schueler = new Schueler(name, vorname);
				
	var jsonString = JSON.stringify(schueler);
	var nummer = localStorage.length;
	var selectedKurs = window.localStorage.getItem("selectedKurs");
	var key = selectedKurs + "schueler" + nummer;
				
	window.localStorage.setItem(key, jsonString);
	alert("Der Schueler: " + schueler.vorname + " " + schueler.name + " " + "wurde erfolgreich angelegt.");
}