## The Links-Portal
This is the Links Portal. The Place for Handy Links

This is designed as a homepage for navigating to other links using HTML, CSS and JavaScript

# Contributing

Welcome to the Links Portal!! We are so happy for you to help!!

To have weblinks added to the Links Portal please:

1. Fork this repository
2. Edit the weblink code to add new weblinks
3. Send out a pull request back to the repository for review and possible addition
4. Welcome aboard and help us make this portal better for everyone

# Adding Links
As links are defined in multiple files, it is important to follow these instructions when adding links.

1. Open pages/portal.html and add this code before the `<script>` tags at the end

`<button id="ID goes here" class=button onclick="location='URL goes here'" />
Button text goes here
</button>`

2. Replace the strings that you need for your link in the template. Make the ID short such as `github`, `gdrive` or `office365`

3. Go to the bottom of the javascript function `tabNew()` and add this under the others like it.

`document.getElementById("ID goes here").setAttribute( "onClick", "window.open('URL goes here', '_blank')" );`

4. Open scripts/edit.js and add your button's ID the list on the first line. e.g 

`var linksList = ["gdocs", "onedrive", "office365", "searchbing"]`

5. Open pages/edit.html and add this code before the `<script>` tag at the end, replacing all strings you need to change.

`<label class="container"> Name goes here  <input type="checkbox" id=ID goes here checked="checked">
  <span class="checkmark"></span>
</label>
<br>`

6. Check that you have kept the IDs consistent otherwise ***javascript will fail.***

7. If you are adding something to the Smart Buttons section, please add the following to the brackets on line 39 (at the time of writing) of scripts/edit.js to ensure the header is removed correctly. Make sure that it is before the closing bracket `)` which is just before the `{` sign.

`&& localStorage.getItem("ID goes here") == 'hide'`

8. You should now have your link showing up in the list

![](images/IMG_0296.jpeg)

## Adding new Users

1. Navigate to [this](https://homemadestea58.github.io/Links-Portal/pages/generate.html) page and generate the hashed password.
2. Open index.html and add the new username to the `users` array, which is defined in the `login()` function.
3. Add the hashed passsword to the `passwords` array.
4. Combine the username and password and add the combined string to the `userpass` array.
