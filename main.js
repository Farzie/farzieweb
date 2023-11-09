function burger1() {
	document.getElementById("menu-btn").setAttribute('onclick','burger2()');
	document.getElementById("menu-btn").className = "menu-btn open";
	document.getElementById("body").style.backgroundColor = "black";
	document.getElementById("nmode").innerHTML = "&#127774;";
	document.getElementById("header").style.borderColor = "white";
}

function burger2() {
	document.getElementById("menu-btn").setAttribute('onclick','burger1()');
	document.getElementById("menu-btn").className = "menu-btn";
	document.getElementById("body").style.backgroundColor = "white";
	document.getElementById("nmode").innerHTML = "&#127769;";
	document.getElementById("header").style.borderColor = "black";
}