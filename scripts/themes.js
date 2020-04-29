function checkTheme() {
	var theme = localStorage.getItem("links-theme");
	if (theme == "christmas") {
		document.documentElement.classList.add("christmas");
	} else if (theme == "custom") {
		document.documentElement.classList.add("custom");
		$('html')[0].style.background = localStorage.getItem("links-theme-custom-html-colour");
	} else {
		document.documentElement.classList.remove("christmas");
	}
}

checkTheme();
