// This code was made with the help of the following website to get the appropriate methods:
// https://www.w3schools.com/howto/howto_js_sticky_header.asp

// We first gather the header elements
var header = document.getElementsByTagName("header")[0];
var subHeader = document.getElementById("subHeader");
var main = document.getElementsByTagName("main");

var stickyOffset = subHeader.offsetTop;

window.onscroll = function testAndApplySticky() {
    if (window.pageYOffset > stickyOffset) {
        subHeader.classList.add("sticky");
    }
    else {
        subHeader.classList.remove("sticky");
        /* This part handles what happens when we extend the sticky header AND scroll to the top */
        if (subHeader.classList.contains("extended")) {
            subHeader.classList.remove("extended");
            header.classList.remove("sticky");
        }
    }

    
}

subHeader.addEventListener("mouseenter", extendHeaderIfSticky);
subHeader.addEventListener("mouseout", collapseHeaderIfSticky);
/*header.addEventListener("mouseenter", extendHeaderIfSticky);*/

function extendHeaderIfSticky() {
    if (this.classList.contains("sticky")) {
        if (!(this.classList.contains("extended"))) {
            subHeader.classList.add("extended");
            header.classList.add("sticky");

        }
    }


    
}


function collapseHeaderIfSticky(event) {
    if ( (this.classList.contains("sticky")) && (this.classList.contains("extended")) ) {
        var collapseOffset = subHeader.offsetHeight;
        //console.log(event.clientY);
        if( (event.clientY > (collapseOffset - 1))) {
            subHeader.classList.remove("extended");
            header.classList.remove("sticky");
        }
        //console.log(event.relatedTarget);
        
    }
}

// Discarded code that was supposed to collapse the header after the animation played if the mouse was not there
/*subHeader.addEventListener("mousemove", function(e) {
    if (e.clientY > 150) {
        subHeader.classList.remove("extended");
        header.classList.remove("sticky");
    }
});*/