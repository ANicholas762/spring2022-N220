circ = 30;

function setup() {
    createCanvas(800,600);
    
}

function draw() {
    background(194, 209, 148);

    ellipse(400,300,circ);
    fill(86, 89, 85);

    if(mouseIsPressed) {
        circ = circ + 1;
    } 

    if(circ == 200) {
        circ = 1;
    }
}