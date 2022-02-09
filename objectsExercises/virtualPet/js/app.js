function setup() {
    createCanvas(800,600);
    background(163, 136, 129);
}

let circ = {
        x:400,
        y:300,
        size: 30,
        offsetX: 0,
    };

function draw() {
    background(163, 136, 129);

     //draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.
    circ.x = mouseX;
    circ.y = mouseY;
    circle((circ.x + circ.offsetX), circ.y, circ.size)

    // if mouse is down subtract 1 from offsetX, down to a lowest number of zero
     if(mouseIsPressed == true) {
         
         if(circ.offsetX != 0) {
             circ.offsetX = circ.offsetX - 1;
         }


    //if the mouse is up - add 1 to offsetX
    
     }else {
        circ.offsetX = circ.offsetX + 1;
     }

   

}   