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

1. Open `links.json` and add a comma after the last curly-brace (`},`)

```JSON
{
	"id": "",
	"text": "",
	"url": "",
	"issmart": false,
	"hasimage": true,
	"script": "",
	"imagepath": "/images/",
	"imagewidth": 30,
	"imageheight": 30
},
```

2. Copy the above `JSON` code and paste on a new line between }, and ]

3. Fill in the code properties:

- `id` - ID of the button. This should be a short string in all lowercase
- `text` - The text that appears on the button
- `url` - The URL which the button will open when clicked - Optional if `issmart` is `true`
- `issmart` - Controls whether the button appears in the Smart Buttons section. If it is `true` then the URL property will be ignored and the script property used instead for the click action
- `hasimage` - Controls whether the button shows an image. If this is `false` then the three image paths are optional
- `script` - The script which will be executed when the button is clicked. Optional if `issmart` is `false`
- `imagepath` - Where the image is stored. This should be in the images directory. Optional if `hasimage` is `false`
- `imagewidth` - What the image width is. Should be around 30 for correct sizing. Optional if `hasimage` is `false`
- `imageheight` - What the image height is. Should be around 30 for correct sizing. Optional if `hasimage` is `false`

4. You should now have your link showing up in the list:

![](images/IMG_0296.jpeg)

## Adding new Users

1. Navigate to [this page](https://homemadestea58.github.io/Links-Portal/pages/generate.html) and generate the hashed password.
2. Open `index.html` and add the new username to the `users` array, which is defined in the `login()` function.
3. Add the hashed passsword to the `passwords` array.
4. Combine the username and hashed password and add the combined string to the `userpass` array.
