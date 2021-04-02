var gallery = document.getElementById("gallery");

fetch("js/gallery.json")
    .then(function(res) {
        res.json().then(function(json) {
            json.images.forEach(function(el) { 
                // First, we create the anchor item that the user will click
                var galleryItem = document.createElement("a");
                // For the anchor to work and to open a page, we provide it an url which is stored in the json file (and in this case, object)
                galleryItem.setAttribute("href", el.url);
                // Since we want to apply some styles to this anchor so that it looks nice, we give this anchor a class
                galleryItem.classList.add("gallery-item");
                // And we want the anchor to open the image link on a new tab upon clicking, so we set the "target" attribute to "_blank"
                galleryItem.setAttribute("target", "_blank");

                // Basically, we will fill this anchor with two elements: an image and a caption
                // Let's begin with the image:
                var img = document.createElement("img");
                // An image needs, well, an image file to display. We retrieve the URL from the json object, like before:
                img.setAttribute("src", el.url);
                // Then, we set the title and alt attributes of the image to the caption value (for accessibility)
                img.setAttribute("title", el.caption);
                img.setAttribute("alt", el.caption);

                // We then create the caption element...
                var caption = document.createElement("caption");
                // ...which, of course, only contains the text of the caption, displayed on screen:
                caption.innerText = el.caption;

                // With those two items ready, we add them to the galleryItem anchor container
                galleryItem.appendChild(img);
                galleryItem.appendChild(caption);
                // And finally, with our gallery item ready, we add it to our gallery.
                // How the gallery will look like with all of its children will be decided in the CSS, at around line 750.
                gallery.appendChild(galleryItem);
            })
        })
    });