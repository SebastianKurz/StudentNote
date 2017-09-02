var anzahl = 0;

function erzeuge(){
			
	for (var i = 1; i <= 24; i++){
		anzahl++;
		var absatz = document.createElement("p");
		var myButton = document.createElement("button");
		var myText = document.createTextNode("my Button" +anzahl);
			
		myButton.setAttribute("class","kurs");
			
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
	}
}