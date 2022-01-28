let rad = 0;    // variable storing the value of 0

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(194, 209, 148);

    rad = rad + 5;  // moves the circle at the speed of 5px toward the right of the canvas

    if(rad == 800) { // when the circle reached 800px, it will warp back to 0 and start again
        rad = 0;
    }

    ellipse(rad,300,40);
    fill(86, 89, 85);
}