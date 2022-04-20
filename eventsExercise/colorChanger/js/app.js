let boxes = document.getElementById("boxes");
boxes.style.display = "flex";
// boxes.style.margin = "5px";

// styling the box (repeated for each box below)
let sqOne = document.getElementById("sqOne")
sqOne.style.height = "200px";
sqOne.style.width = "200px";
sqOne.style.backgroundColor = "#9e9e9e";
sqOne.style.margin = "5px";

// adding an event listener to to check for when the box is clicked to change its color (repeated for each box below)
sqOne.addEventListener("click", sqOneClick);
function sqOneClick() {
    sqOne.style.backgroundColor = "#70131b";
}

let sqTwo = document.getElementById("sqTwo");
sqTwo.style.height = "200px";
sqTwo.style.width = "200px";
sqTwo.style.backgroundColor = "#9e9e9e";
sqTwo.style.margin = "5px";

sqTwo.addEventListener("click", sqTwoClick);
function sqTwoClick() {
    sqTwo.style.backgroundColor = "#218a2c";
}

let sqThree = document.getElementById("sqThree");
sqThree.style.height = "200px";
sqThree.style.width = "200px";
sqThree.style.backgroundColor = "#9e9e9e";
sqThree.style.margin = "5px";

sqThree.addEventListener("click", sqThreeClick);
    function sqThreeClick() {
        sqThree.style.backgroundColor = "#131754";

    }


