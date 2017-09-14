alert("Username: admin, Passwort: admin ");

if(!(window.localStorage.getItem("schuleName"))){
	window.localStorage.setItem("schuleName","none");
}

if(window.localStorage.getItem("isLoggedIn") && window.localStorage.getItem("isLoggedIn") != "none"){
	window.location.href = "Kurse.html";
}

function basicLogin(){
				
	var uname = document.form1.username.value;
	var pwort = document.form1.passwort.value;
	var korrekt = false;
	window.localStorage.setItem("selectedKurs","none");
				
	if(uname == "admin" && pwort == "admin"){
		window.location.href = "Kurse.html";
	}
	else{
		var nummer = window.localStorage.length;
					
		for( var i = 0; i < nummer; i++){
						
			var key = "lehrer"+i;
			
			if(window.localStorage.getItem(key)){
				var jsonstring =  window.localStorage.getItem(key);
				var lehrer = JSON.parse(jsonstring);
						
				var benutzername = lehrer.benutzername;
				var pw = lehrer.passwort;
						
				if(uname == benutzername && pwort == pw){
					korrekt = true;
					window.localStorage.setItem("isLoggedIn", key);
					window.location.href = "Kurse.html";
					break;
				}
			}
			else continue;
		}
		if(korrekt == false) alert("Login inkorrekt");
	}
}
