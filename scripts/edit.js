function save() {
	if (document.getElementById("bitly").checked == false) {
		localStorage.setItem("bitly", "hide");
	} else {
		localStorage.setItem("bitly", "show");
	}
	if (document.getElementById("cgmail").checked == false) {
		localStorage.setItem("cgmail", "hide");
	} else {
		localStorage.setItem("cgmail", "show");
	}
	if (document.getElementById("gdrive").checked == false) {
		localStorage.setItem("gdrive", "hide");
	} else {
		localStorage.setItem("gdrive", "show");
	}
	if (document.getElementById("gcalendar").checked == false) {
		localStorage.setItem("gcalendar", "hide");
	} else {
		localStorage.setItem("gcalendar", "show");
	}
	if (document.getElementById("gdrive").checked == false) {
		localStorage.setItem("gdrive", "hide");
	} else {
		localStorage.setItem("gdrive", "show");
	}


	location = "portal.html";
}

// Removes an element by it's ID
function re(id) {
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function hide() {
	var bitly = localStorage.getItem("bitly");
	var cgmail = localStorage.getItem("cgmail");
	var gdrive = localStorage.getItem("gdrive");
	var gcalendar = localStorage.getItem("gcalendar");
	if (bitly == "hide") {
		re("bitly");
	}
	if (cgmail == "hide") {
		re("newgmail");
	}
	if (gdrive == "hide") {
		re("gdrive");
	}
	if (gcalendar == "hide") {
		re("gcalendar");
	}
	if (gdrive == "hide") {
		re("gdrive");
	}
	if (gdrive == "hide") {
		re("gdrive");
	}
}
