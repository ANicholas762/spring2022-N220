// pulled elements from the index page and created varibales to be used. 
let tags = document.getElementById("tags");
    tags.style.display = "flex";
    tags.style.justifyContent = "space-around";
    tags.style.padding = "4px";

//  button styling
let buttons = document.getElementById("buttons");
    buttons.style.display = "flex";
    buttons.style.justifyContent = "space-around";

    // created an array with three elements inside named after cities. 
let city = ["seattle", "new york", "boston"]

// function created so that when the button is clicked, it targets the strings inside the array and display to the HTML page 
function btnClick(city) {
    let output = document.getElementById("output");

    output.innerHTML = "Index: ";
}