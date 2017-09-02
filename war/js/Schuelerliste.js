var anzahl = 0;

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
		 erzeuge();
		 ueberschrift();
	 }
}

function erzeuge(){
	
	var nummer = window.localStorage.length;
	var selectedKurs = window.localStorage.getItem("selectedKurs");

	for (var i = 0; i <= nummer; i++){
		
		var key = selectedKurs + "schueler" +i;
		
		if(window.localStorage.getItem(key)){
			anzahl++;
		
			var jsonstring = window.localStorage.getItem(key);
			var schueler = JSON.parse(jsonstring);
		
			var absatz = document.createElement("p");
			var myButton = document.createElement("button");
			var myText = document.createTextNode(schueler.vorname + " " + schueler.name);
			
			var buttonFunktion = "ausgewaehlterSchueler(\"" + key + "\")";
			
			myButton.setAttribute("class","kurs");
			myButton.setAttribute("style","width:80%");
			myButton.setAttribute("onclick","linkToNotizen();" + buttonFunktion);
			
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
			
			myButton.appendChild(myText);
			absatz.appendChild(myButton);
			ausgabe.appendChild(absatz);
			
		}else continue;
	}
}

function ausgewaehlterSchueler(key){
	window.localStorage.setItem("selectedSchueler", key);
}

function ueberschrift(){
	var ziel = document.getElementById("ueberschriftSV");
	
	var selectedKurs = window.localStorage.getItem("selectedKurs");
	var jsonstring = window.localStorage.getItem(selectedKurs);
	var kurs = JSON.parse(jsonstring);
	var myTextNode = document.createTextNode("Schulverwaltung - Kurs " + kurs.name + " " + kurs.klasse + " - Schueler:");
	ziel.appendChild(myTextNode);
}