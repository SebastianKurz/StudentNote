function logout(){
	window.localStorage.setItem("isLoggedIn","none");
	window.location.href = "index.html";
}