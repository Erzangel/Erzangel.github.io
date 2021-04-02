/// SETTINGS ///
// Set this to true if you want to disable autoscrolling when using arrows
var arrowsDisableAutoScroll = true;
// Set this to each individual image's dimensions
// Here, we have designed our images to all be the same dimensions: 842 x 960.
var widthImg = 421;
var heightImg = 960;

//////////////////

var carouselImages = document.getElementById("carouselImages");

fetch("js/carousel.json")
    .then(function(res) {
        res.json().then(function(json) {
            json.images.forEach(function(el) { 
                // This carousel JS file works similarly to the gallery in imggallery.js.

                // The first thing we'd like to do is to load one image per one in this forEach loop.
                // Naturally the first step is to create an img item
                var newImg = document.createElement("img");
                // We set the attributes of this img as seen in the gallery
                newImg.setAttribute("src", el.url);
                newImg.setAttribute("title", el.caption);
                newImg.setAttribute("alt", el.caption);

                // Here, no need to add a caption item. They will be handled separately
            
                // We add the newImg to our carouselImages object
                carouselImages.appendChild(newImg);
            })

            // When we're done, we call the function that initializes the carousel
            bootCarousel(json);
        })
    });

var carouselName = document.getElementById("carouselName");
var carouselCaption = document.getElementById("carouselCaption");
var carouselButtonLeft = document.getElementById("carouselButtonLeft");
var carouselButtonRight = document.getElementById("carouselButtonRight");
var carouselCirclesList = document.getElementById("carouselCircles");
var carouselAutoScroll = document.getElementById("carouselAutoScroll");


function bootCarousel(json) {
    var nbImages = json.images.length;

    var currentImg = 0; // I have chosen to index the first image in the carousel as 0.
                        // This means that this value will go between 0 and maxImages - 1
    
    // This carousel works "horizontally", so we will create a very horizontally large image.
    // In other words, the carouselImages item will have a width of the base width times the number of images
    carouselImages.style.width = (widthImg*nbImages) + "px";
    carouselImages.style.height = heightImg + "px";

    // We would like to add little circles at the bottom of the carousel to indicate the number of existing images
    // and where the current image is located among those.
    // We want to build as many circles as there are images loaded in the json object. (We have a variable for that)
    for (var i = 0; i<nbImages; ++i) {
        var newCircle = document.createElement("span");
        newCircle.classList.add("empty-circle");
        carouselCirclesList.appendChild(newCircle);
    }

    // This whole loop's goal is to add event listeners changing the image appropriately when we click on the circles (or pips)
    for (var i = 0; i<nbImages; ++i) {
        carouselCirclesList.children[i].addEventListener("click", function(e) {
            for (var i = 0; i < nbImages; ++i ) {
                if (carouselCirclesList.children[i] === e.target) {
                    currentImg = i;
                    carouselImages.style.left = "-" + (currentImg*widthImg) + "px";
                    carouselName.innerText = json.images[currentImg].name;
                    carouselCaption.innerText = json.images[currentImg].caption;
                    updateCircles(currentImg);
                    // We automatically disable autoscroll when using the arrow if the setting is true
                    if (arrowsDisableAutoScroll === true) {
                        autoScrollEnabled = false;
                    }
                    updateAutoScrollButton(autoScrollEnabled);
                }
            }
        });
    }

    // Then, we want to create a function that refreshes the one circle that's solid (as it changes everytime)
    // This function will be defined below in the code. For now, we will call it

    // The next thing we want to do is set our button's behaviour
    // We will do this within this bootCarousel function so that we have access to the currentImg variable
    carouselButtonLeft.addEventListener("click", function(e) {
        // This line is necessary to not make the buttons go to the top of the page when clicked
        e.preventDefault();
        // If we can actually make our carousel go to the left...
        if (currentImg !== 0) {
            // We decrement the currentImg counter
            currentImg--;
        }
        else {
            currentImg = nbImages - 1;
        }
        // We want to ultimately move our image from the left border of the screen according to the currentImg value,
        // and proportionally to the width of one of the images
        carouselImages.style.left = "-" + (currentImg*widthImg) + "px";

        // A press of the button will change the current image. Thus, we refresh the text inside the name and caption paragraph
        carouselName.innerText = json.images[currentImg].name;
        carouselCaption.innerText = json.images[currentImg].caption;
        updateCircles(currentImg);
        

        // We automatically disable autoscroll when using the arrow if the setting is true
        if (arrowsDisableAutoScroll === true) {
            autoScrollEnabled = false;
        }
        updateAutoScrollButton(autoScrollEnabled);
    });

    carouselButtonRight.addEventListener("click", function(e) {
        // This line is necessary to not make the buttons go to the top of the page when clicked
        e.preventDefault();
        // In this case, we are checking if it's possible to go to the right
        if (currentImg !== (nbImages - 1)) {
            currentImg++;
        }
        else {
            currentImg = 0;
        }
        carouselImages.style.left = "-" + (currentImg*widthImg) + "px";
        // After hitting the button, we update the carousel caption with the correct caption from the json object
        // Same goes for the name item
        carouselName.innerText = json.images[currentImg].name;
        carouselCaption.innerText = json.images[currentImg].caption;
        updateCircles(currentImg);
        

        // We automatically disable autoscroll when using the arrow if the setting is true
        if (arrowsDisableAutoScroll === true) {
            autoScrollEnabled = false;
        }
        updateAutoScrollButton(autoScrollEnabled);
    });

    // Finally, we run the caption update one time so that we get some text when the page loads
    carouselName.innerText = json.images[currentImg].name;
    carouselCaption.innerText = json.images[currentImg].caption;


    // Additionally, we'd like for the carousel to move on its own periodically over time, without user input
    // We will make use of the setInterval() function of the window object

    // But first, we will define a boolean variable that will allow the user to decide if they want to set auto-scrolling or not.
    // It will be on by default, so the initial value will be true
    var autoScrollEnabled = true;

    window.setInterval(function() {
        if (autoScrollEnabled === true) {
            // If we're not at the end of the carousel...
            if (currentImg !== (nbImages - 1)) {
                currentImg++;
            }
            else {
                currentImg = 0;
            }
            carouselImages.style.left = "-" + (currentImg*widthImg) + "px";
            carouselName.innerText = json.images[currentImg].name;
            carouselCaption.innerText = json.images[currentImg].caption;
            updateCircles(currentImg);
        }
        
    }, 4000);

    // Then, we define behavior for the autoscroll button
    carouselAutoScroll.addEventListener("click", function(e) {
        // We prevent the normal anchor behavior
        e.preventDefault();
        // Then we simply toggle the autoscroll value and update the button state per click
        autoScrollEnabled = !(autoScrollEnabled);
        updateAutoScrollButton(autoScrollEnabled);
    });

    // We also run an update of the circles and of the autoscroll button after initialisation
    updateCircles(currentImg);
    updateAutoScrollButton(autoScrollEnabled);
}


// We will define the function applying the correct CSS class to the correct circle, depending on which image is currently selected
function updateCircles(currentImg) {
    var circlesArray = carouselCirclesList.children;
    for (var i = 0; i<circlesArray.length; ++i) {
        circlesArray[i].classList.remove("empty-circle");
        circlesArray[i].classList.remove("solid-circle");
        if (i === currentImg) {
            circlesArray[i].classList.add("solid-circle");
        }
        else {
            circlesArray[i].classList.add("empty-circle");
        }
    }
}

function updateAutoScrollButton(autoScrollEnabled) {
    if (autoScrollEnabled === true) {
        carouselAutoScroll.classList.add("auto-scroll-enabled");
    }
    else {
        carouselAutoScroll.classList.remove("auto-scroll-enabled");
    }
}