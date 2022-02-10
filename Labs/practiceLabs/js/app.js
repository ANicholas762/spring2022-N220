function setup() {
    createCanvas(800,600);
    background(128, 112, 122);
}

// rect(30, 20, 55, 55);
let tvBase = {
    x: 175,
    y: 200,
    width: 450,
    height: 250,
    color: "#262525",
};

let scr = {
    x: 200,
    y: 220,
    width: 400,
    height: 200,
    color: "#000000",
};

// line(30, 20, 85, 75);
let line = {
    x: 400,
    y: 20,
    x2: 85,
    y2: 75,
    color: "#000000",
};

let line2 = {
    x: 30,
    y: 20,
    x1: 85,
    y2: 75,
};


function draw() {

    fill(tvBase.color);
    rect(tvBase.x, tvBase.y, tvBase.width, tvBase.height);
    
    fill(scr.color);
    rect(scr.x, scr.y, scr.width, scr.height);

    fill(line.color);
    line(line.x, line.y, line.x2, line.y2);
}