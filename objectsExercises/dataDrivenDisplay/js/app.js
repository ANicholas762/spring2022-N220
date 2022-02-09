function setup() {
    createCanvas(800,600);
    background(21, 44, 82);
}

 // square(30, 20, 55);
let sq = {
    x: 350,
    y: 250,
    side: 100,
    color: "#a9b6cc",
};

function draw() {
    
    fill(sq.color);
//    square(sq.x, sq.y, sq.side); 

   drawObject(sq)
    
}

function drawObject(object) {
    square(object.x, object.y, object.side); 
}