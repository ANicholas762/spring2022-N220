let rad = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(194, 209, 148);

    rad = rad + 5;

    if(rad == 800) {
        rad = 0;
    }

    ellipse(rad,300,40);
    fill(86, 89, 85);
}