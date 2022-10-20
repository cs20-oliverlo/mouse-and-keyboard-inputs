// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let x = 100;
let mouseIsPressed = false;

requestAnimationFrame(draw);
function draw() {
    // UPDATE ELEMENTS ON CANVAS

    // Animate if mouse button is held down
    if (mouseIsPressed) {
        x++;
    }

    // DRAW CANVAS
    ctx.fillstyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

    ctx.fillStyle = "green";
    ctx.fillRect(x, 100, 50, 50); // Rectangle

    // REQUEST ANIMATION FRAME
    requestAnimationFrame(draw);
}

