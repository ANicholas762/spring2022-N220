circ = 30; // variable storing the value of 30

function setup() {
    createCanvas(800,600);
    
}

function draw() {
    background(194, 209, 148);

    ellipse(400,300,circ); // the cooridinates and size of the circle
    fill(86, 89, 85);

    if(mouseIsPressed) {    // if the mouse is pressed, the cirlce will increase by 1
        circ = circ + 1;
    } 

    if(circ == 200) { // Once the circle reaches a size of 200px, the circle will revert back to 1 and repeat when the mouse is pressed.
        circ = 1;
    }
}