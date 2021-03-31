// We want to retrieve the img item in order to change its source image to something smaller, for smaller screens
var logoImg = document.getElementById('logoImg');

// The first thing we'd like to do is to add a listener to monitor the screen's width.
// With the help of this MDN link, here is how we will proceed: https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

// First, we define the function that does what we want to do if a certain screen width is reached
function modifyHeaderIfSmallEnough() {
    if (screen.width < 601) {
        logoImg.setAttribute('src', 'img/icons/fecentral_smalllogo.png');
    }
    else {
        logoImg.setAttribute('src', 'img/icons/fecentral_logo2.png')
    }
}

// Then, we'd like to run the function at least once
modifyHeaderIfSmallEnough();

// And finally, we add an event listener on resize
window.addEventListener("resize", modifyHeaderIfSmallEnough);
/*window.onresize = modifyHeaderIfSmallEnough();*/
// We run the function once on startup
modifyHeaderIfSmallEnough();