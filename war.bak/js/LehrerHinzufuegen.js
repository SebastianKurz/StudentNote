function Lehrer(bn, pw, vn, nn){
				
	this.benutzername = bn;
	this.passwort = pw;
	this.vorname = vn;
	this.nachname = nn;
}
			
function neuerLehrer(){
	
	if(document.form1.passwort.value == document.form1.passwort2.value){
		var bn = document.form1.username.value;
		var pw = document.form1.passwort.value;
		var vn = document.form1.vname.value;
		var nn = document.form1.nname.value;
				
		var lehrer = new Lehrer(bn, pw, vn, nn);
			
		var jsonString = JSON.stringify(lehrer);
		var nummer = localStorage.length;
		var key = "lehrer"+ nummer;
				
		window.localStorage.setItem(key, jsonString);
		alert("Der Lehrer: " + lehrer.vorname + " " + lehrer.nachname + " " + " wurde erfolgreich angelegt.");		
	}
	else alert("Bitte geben Sie zwei mal das selbe Passwort ein!");
}