circ = 100; //varibles for the circle and square
sq = 100;

function setup() {          //canvas size and background color
    createCanvas(800, 600);
    background(15, 34, 59);
}

function draw() {                   // the position and size of the circle as well as the color
    circle(mouseX, mouseY, circ);
    fill(190, 191, 124);
    

    square(400, 300, sq);   // the position and size of the square as well as the color
    fill(69, 105, 31)

    
    if(mouseIsPressed) {        //if statement that declares that if the mouse is pressed, the circle will increase in size by 2
        circ = circ + 1;
    }



}