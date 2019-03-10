var linksList = ["tools", "searchgoogle", "searchyoutube", "searchgimages", "gowayback", "bitly", "cgmail", "gdrive", "gcalendar" , "gdocs", "gsheets", "gslides", "gforms", "gclassroom", "gsites", "ghangouts", "onedrive", "office365", "jotform", "yammer", "btn", "ifttt", "smh", "snap", "github", "p-prodigy", "prodigy", "l-mathletics", "mathletics", "l-eggs", "eggs"];

function checkBoxes() {
	for (var pos = 0; pos < linksList.length; pos++) {
	checkID = linksList[pos];
	if (localStorage.getItem(checkID) == "hide") {
		document.getElementById(checkID).checked = false;
	}
	}
}

function save() {

	for (var pos = 0; pos < linksList.length; pos++) {
		checkedID = linksList[pos];
		if (document.getElementById(checkedID).checked == false) {
		localStorage.setItem(checkedID, "hide");
	} else {
		localStorage.setItem(checkedID, "show");
	}
	}

	location = "portal.html";
}

function re(id) {
//	Remove element by ID
	var element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function hide() {
	for (var pos = 0; pos < linksList.length; pos++) {
		selectedID = linksList[pos];
		if (localStorage.getItem(selectedID) == "hide") {
			re(selectedID);
		}
	}
	if (localStorage.getItem("searchgoogle") == 'hide' && localStorage.getItem("searchgimages") == 'hide' && localStorage.getItem("searchyoutube") == 'hide' && localStorage.getItem("tools") == 'hide' && localStorage.getItem("gowayback") == 'hide') {
		re("smartbuttons");
		re("buttonBreak1");
	}
}
