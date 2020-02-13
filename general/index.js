"use strict"
// For the purpose of being more comfortable with the DOM, there is not used jquery here.

// ----------------------------------------- Overflow -----------------------------------------------

// The containers objects is declared here in order to save horizontal lines of code.
// Gets the box that we want to target with overflow css code. 
var childContainer = document.querySelector("#overflow-container .lorem-ipsum-container");

function removeOverflowClases () {
    // Claes to remove
    var overflowClases = [
        "overflow-y-visible",
        "overflow-y-hidden",
        "overflow-y-scroll",
        "overflow-y-scroll",
        "overflow-y-auto"
    ]
    // Itterates over overflowClases and removoes each clas from the target
    overflowClases.forEach( (value, index) => {
        childContainer.classList.remove(value);
    })
}

// Reset the content
document.querySelector("#reset-overflow-button").addEventListener("click", removeOverflowClases);

document.querySelector("#overflow-y-visible-button").addEventListener("click", () => {
    removeOverflowClases();
    childContainer.classList.add("overflow-y-visible");
});
document.querySelector("#overflow-y-hidden-button").addEventListener("click", () => {
    removeOverflowClases();
    childContainer.classList.add("overflow-y-hidden");
});
document.querySelector("#overflow-y-scroll-button").addEventListener("click", () => {
    removeOverflowClases();
    childContainer.classList.add("overflow-y-scroll");
});
document.querySelector("#overflow-y-auto-button").addEventListener("click", () => {
    removeOverflowClases();
    childContainer.classList.add("overflow-y-auto");
});

document.querySelector("#toggle-content-button").addEventListener("click", () => {
    var targetContent = childContainer.querySelector("span");
    // If the display property is not set, or it is inline. 
    if(targetContent.style.display === "" || targetContent.style.display === "inline"){
        targetContent.style.display = "none";
        
    }
    else{
        targetContent.style.display = "inline";
    }
});

// ------------------------------------------ Float -------------------------------------------

var batmanImage = document.querySelector("#batman-image");
document.querySelector("#float-none-button").addEventListener("click", () => {
    // Replaces existing classes with the float-none-button class
    batmanImage.classList = "float-none"
})
document.querySelector("#float-left-button").addEventListener("click", () => {
    batmanImage.classList = "float-left"
})
document.querySelector("#float-right-button").addEventListener("click", () => {
    
    batmanImage.classList = "float-right"
})