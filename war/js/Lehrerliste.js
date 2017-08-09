var anzahl = 0;

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
		 erzeuge();
	 }
}

function erzeuge(){
	
	var nummer = window.localStorage.length;
	
	for (var i = 0; i <= nummer; i++){
		
		var key = "lehrer"+i;
		
		if(window.localStorage.getItem(key)){
			anzahl++;
		
			var jsonstring = window.localStorage.getItem(key);
			var lehrer = JSON.parse(jsonstring);
		
			var absatz = document.createElement("p");
			var myButton = document.createElement("button");
			var myText = document.createTextNode(lehrer.vorname + " " + lehrer.nachname);
			
			myButton.setAttribute("class","kurs");
			myButton.setAttribute("style","width:80%");
			
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