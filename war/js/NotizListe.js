var anzahl = 0;

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
		 erzeuge();
		 ueberschrift();
	 }
}

function erzeuge(){
	
	var nummer = window.localStorage.length;
	var selectedSchueler = window.localStorage.getItem("selectedSchueler");
	
	for (var i = 0; i <= nummer; i++){

		var key = selectedSchueler + "notiz" +i;
		
		if(window.localStorage.getItem(key)){
			
			anzahl++;
			
			var jsonstring = window.localStorage.getItem(key);
			var notiz = JSON.parse(jsonstring);
		
			var absatz = document.createElement("p");
			
			var myFunction = "ausgewaehlteNotiz(\"" + key + "\")";
			
			var myTextArea = document.createElement("textarea");
				myTextArea.setAttribute("style","width:80%; height:80%");
				myTextArea.setAttribute("readonly","");
				myTextArea.setAttribute("onclick", "linkToNotizBearbeiten();" + myFunction);
			var myText = document.createTextNode(notiz.user + notiz.inhalt);
			
			if(anzahl <= 6){
				var ausgabe = document.getElementById("linksinnenLinks");
			}
			else if(anzahl > 6 && anzahl <= 12){
				var ausgabe = document.getElementById("linksinnenRechts");
			}
			else if(anzahl > 12 && anzahl <= 18){
				var ausgabe = document.getElementById("rechtsinnenLinks");
			}
			else if(anzahl > 18 && anzahl <= 24){
				var ausgabe = document.getElementById("rechtsinnenRechts");
			}
			else break;
			
			myTextArea.appendChild(myText);
			absatz.appendChild(myTextArea);
			ausgabe.appendChild(absatz);
		}
		else continue;
	}
}

function ausgewaehlteNotiz(schluessel){
	window.localStorage.setItem("selectedNotiz", schluessel);
}

function ueberschrift(){
	var ziel = document.getElementById("ueberschriftSV");
	
	var selectedSchueler = window.localStorage.getItem("selectedSchueler");
	var jsonstring = window.localStorage.getItem(selectedSchueler);
	var schueler = JSON.parse(jsonstring);
	var myTextNode = document.createTextNode("Schulverwaltung - Schueler " + schueler.vorname + " " + schueler.name);
	ziel.appendChild(myTextNode);
}