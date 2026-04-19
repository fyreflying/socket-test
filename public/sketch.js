var socket;

function setup() {

    createCanvas(500, 500);
    background(124);

    socket = io.connect('http://localhost:3000/');

}

function mouseDragged() {
    
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);

    console.log(mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);
    socket.on('mouse', newDrawing);


}

function newDrawing(data) {

    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 50, 50);

}

function draw() {

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);

}