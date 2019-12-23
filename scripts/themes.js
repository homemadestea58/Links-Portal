function checkTheme() {
	var theme = localStorage.getItem("links-theme");
	if (theme == "christmas") {
		document.documentElement.classList.add("christmas");
	} else {
		document.documentElement.classList.remove("christmas");
	}
}

checkTheme();
