var selectedNotiz = window.localStorage.getItem("selectedNotiz");
var jsonstring = window.localStorage.getItem(selectedNotiz);
var notiz = JSON.parse(jsonstring);

document.onreadystatechange = function () {
     if (document.readyState == "complete") {
		var ziel = document.getElementById("notiz");
		var myTextNode = document.createTextNode(notiz.inhalt);
		ziel.appendChild(myTextNode);
	 }
}


function notizBearbeiten(){
	notiz.inhalt = document.form1.notiz.value;
	
	jsonstring = JSON.stringify(notiz);
	window.localStorage.setItem(selectedNotiz,jsonstring);
}