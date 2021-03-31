// THIS PART OF THE JS FILE IS RELATED TO THE POP-UPS FOR ABOUT US / CONTACT PARTS OF THE WEBSITE

var aboutUs = document.getElementById("aboutUs");
var aboutUsButton = document.getElementById("aboutUsButton");
var contact = document.getElementById("contact");
var contactButton = document.getElementById("contactButton");

aboutUsButton.addEventListener("click", function(e) {
    e.preventDefault();
    aboutUs.classList.remove("hidden");
});

aboutUs.addEventListener("click", function(e) {
    aboutUs.classList.add("hidden");
});

contactButton.addEventListener("click", function(e) {
    e.preventDefault();
    contact.classList.remove("hidden");
});

contact.addEventListener("click", function(e) {
    contact.classList.add("hidden");
});

// THIS PART OF THE JS FILE IS RELATED TO THE EXTENDABLE ITEMS ON THE FEGAMES.HTML FILE

var FE1extendable = document.getElementById("FE1extendable");
var FE1extendableButton = document.getElementById("FE1extendableButton");
var FE1extendableHeader = document.getElementById("FE1extendableHeader");


if (FE1extendableButton !== null) {
    FE1extendableButton.addEventListener("click", function(e) {
        e.preventDefault();
        // If the section is extended, we collapse it back
        if (FE1extendable.classList.contains("hidden")) {
            FE1extendable.classList.remove("hidden");
            FE1extendableHeader.style.borderRadius = "10px 10px 0 0";
            FE1extendableButton.innerText = "-";
        }
        else {
            FE1extendable.classList.add("hidden");
            FE1extendableHeader.style.borderRadius = "10px 10px 10px 10px";
            FE1extendableButton.innerText = "+";
        }
    });
}

var FE2extendable = document.getElementById("FE2extendable");
var FE2extendableButton = document.getElementById("FE2extendableButton");
var FE2extendableHeader = document.getElementById("FE2extendableHeader");

if (FE2extendableButton !== null) {
    FE2extendableButton.addEventListener("click", function(e) {
        e.preventDefault();
        // If the section is extended, we collapse it back
        if (FE2extendable.classList.contains("hidden")) {
            FE2extendable.classList.remove("hidden");
            FE2extendableHeader.style.borderRadius = "10px 10px 0 0";
            FE2extendableButton.innerText = "-";
        }
        else {
            FE2extendable.classList.add("hidden");
            FE2extendableHeader.style.borderRadius = "10px 10px 10px 10px";
            FE2extendableButton.innerText = "+";
        }
    });
}

var FE7extendable = document.getElementById("FE7extendable");
var FE7extendableButton = document.getElementById("FE7extendableButton");
var FE7extendableHeader = document.getElementById("FE7extendableHeader");

if (FE7extendableButton !== null) {
    FE7extendableButton.addEventListener("click", function(e) {
        e.preventDefault();
        // If the section is extended, we collapse it back
        if (FE7extendable.classList.contains("hidden")) {
            FE7extendable.classList.remove("hidden");
            FE7extendableHeader.style.borderRadius = "10px 10px 0 0";
            FE7extendableButton.innerText = "-";
        }
        else {
            FE7extendable.classList.add("hidden");
            FE7extendableHeader.style.borderRadius = "10px 10px 10px 10px";
            FE7extendableButton.innerText = "+";
        }
    });
}

var FE9extendable = document.getElementById("FE9extendable");
var FE9extendableButton = document.getElementById("FE9extendableButton");
var FE9extendableHeader = document.getElementById("FE9extendableHeader");

if (FE9extendableButton !== null) {
    FE9extendableButton.addEventListener("click", function(e) {
        e.preventDefault();
        // If the section is extended, we collapse it back
        if (FE9extendable.classList.contains("hidden")) {
            FE9extendable.classList.remove("hidden");
            FE9extendableHeader.style.borderRadius = "10px 10px 0 0";
            FE9extendableButton.innerText = "-";
        }
        else {
            FE9extendable.classList.add("hidden");
            FE9extendableHeader.style.borderRadius = "10px 10px 10px 10px";
            FE9extendableButton.innerText = "+";
        }
    });
}

var FE13extendable = document.getElementById("FE13extendable");
var FE13extendableButton = document.getElementById("FE13extendableButton");
var FE13extendableHeader = document.getElementById("FE13extendableHeader");

if (FE13extendableButton !== null) {
    FE13extendableButton.addEventListener("click", function(e) {
        e.preventDefault();
        // If the section is extended, we collapse it back
        if (FE13extendable.classList.contains("hidden")) {
            FE13extendable.classList.remove("hidden");
            FE13extendableHeader.style.borderRadius = "10px 10px 0 0";
            FE13extendableButton.innerText = "-";
        }
        else {
            FE13extendable.classList.add("hidden");
            FE13extendableHeader.style.borderRadius = "10px 10px 10px 10px";
            FE13extendableButton.innerText = "+";
        }
    });
}