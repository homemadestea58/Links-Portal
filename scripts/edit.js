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
	if (document.getElementById("gdocs").checked == false) {
		localStorage.setItem("gdocs", "hide");
	} else {
		localStorage.setItem("gdocs", "show");
	}
	if (document.getElementById("gsheets").checked == false) {
		localStorage.setItem("gsheets", "hide");
	} else {
		localStorage.setItem("gsheets", "show");
	}
	if (document.getElementById("gforms").checked == false) {
		localStorage.setItem("gforms", "hide");
	} else {
		localStorage.setItem("gforms", "show");
	}
	if (document.getElementById("gclassroom").checked == false) {
		localStorage.setItem("gclassroom", "hide");
	} else {
		localStorage.setItem("gclassroom", "show");
	}
	if (document.getElementById("gsites").checked == false) {
		localStorage.setItem("gsites", "hide");
	} else {
		localStorage.setItem("gsites", "show");
	}
	if (document.getElementById("ghangouts").checked == false) {
		localStorage.setItem("ghangouts", "hide");
	} else {
		localStorage.setItem("ghangouts", "show");
	}

	if (document.getElementById("gslides").checked == false) {
		localStorage.setItem("gslides", "hide");
	} else {
		localStorage.setItem("gslides", "show");
	}


	location = "portal.html";
}

function re(id) {
//	Remove element by ID
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function hide() {
	if (localStorage.getItem("bitly") == "hide") {
		re("bitly");
	}
	if (localStorage.getItem("cgmail") == "hide") {
		re("newgmail");
	}
	if (localStorage.getItem("gdrive") == "hide") {
		re("gdrive");
	}
	if (localStorage.getItem("gcalendar") == "hide") {
		re("gcalendar");
	}
	if (localStorage.getItem("gdocs") == "hide") {
		re("gdocs");
	}
	if (localStorage.getItem("gsheets") == "hide") {
		re("gsheets");
	}
	if (localStorage.getItem("gforms") == "hide") {
		re("gforms");
	}
	if (localStorage.getItem("gclassroom") == "hide") {
		re("gclassroom");
	}
	if (localStorage.getItem("gsites") == "hide") {
		re("gsites");
	}
	if (localStorage.getItem("ghangouts") == "hide") {
		re("ghangouts");
	}
	if (localStorage.getItem("gslides") == "hide") {
		re("gslides");
	}
}
