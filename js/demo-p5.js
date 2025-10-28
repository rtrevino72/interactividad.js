function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(200, 200, 10, 10);
}

function mouseMoved() {
    noStroke();
    fill(10, 200, 200);
    const size = Math.abs(Math.sin(frameCount * .01)) * 100;
    ellipse(mouseX, mouseY, size, size);
}