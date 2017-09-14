document.onreadystatechange = function () {
     if (document.readyState == "complete") {
		 var ziel = document.form1.schulname;
		 var text = window.localStorage.getItem("schuleName");
		 ziel.value = text;
	 }
}

function bearbeiten(){
	var name = document.form1.schulname.value;
	window.localStorage.setItem("schuleName",name);
	alert("Die Schule wurde erfolgeich auf den Namen " + window.localStorage.getItem("schuleName") +" geaendert");
}