// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;



// MOUSE PRESS
// let x = 100;
// let mouseIsPressed = false;

// requestAnimationFrame(draw);
// function draw() {
//     // UPDATE ELEMENTS ON CANVAS

//     // Animate if mouse button is held down
//     if (mouseIsPressed) {
//         x += 2;
//     }
//     if (x > 600) {
//         x = -100;
//     }

//     // DRAW CANVAS
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

//     // Solid Rectangle
//     ctx.fillStyle = "green";
//     ctx.fillRect(x, 50, 100, 60);

//     // REQUEST ANIMATION FRAME
//     requestAnimationFrame(draw);
// }

//     // Event Listeners & Handlers
//     document.addEventListener("mousedown", mousedownHandler);
//     document.addEventListener("mouseup", mouseupHandler);

// function mousedownHandler() {
//     mouseIsPressed = true;
// }

// function mouseupHandler() {
//     mouseIsPressed = false;
// }



// MOUSE MOVE
// let mouseX, mouseY;

// requestAnimationFrame(draw);
// function draw(){
//     // Background
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, cnv.width, cnv.height);

//     // Draw mouse coordinates at mouse location
//     ctx.font = "24px Arial";
//     ctx.fillStyle = "black";
//     let mouseCoordsStr = "(" + mouseX +"," + mouseY +")";
//     ctx.fillText(mouseCoordsStr, mouseX, mouseY);
    
//     requestAnimationFrame(draw);
// }



// // Event Listeners & Handlers
// document.addEventListener("mousemove", mousemoveHandler);

// function mousemoveHandler(event) {
//     // Get rectangle info about canvas location
//     let cnvRect = cnv.getBoundingClientRect();

//     // Calc mouse coordinates using mouse event canvas location info
//     mouseX = Math.round(event.clientX - cnvRect.left);
//     mouseY = Math.round(event.clientY - cnvRect.top);
// }

// ANIMATE WHILE KEY IS PRESSED
// let x = 100;
// let keyIsPressed = false;

// requestAnimationFrame(draw);
// function draw() {
//     // UDATE ELEMENTS ON CANVAS

//     // Animate if any key is heald down
//     if (keyIsPressed) {
//         x++;
//     }
//     if (x > 400) {
//         x = -100;
//     }

//     // DRAW CANVAS
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, cnv.width, cnv.height); // Background

//     // Solid Rectangle
//     ctx.fillStyle = "green";
//     ctx.fillRect(x, 50, 100, 60);

//     requestAnimationFrame(draw);
// }

// // Event Listeners & Handlers
// document.addEventListener("keydown", keydownHandler);
// document.addEventListener("keyup", keyupHandler);

// function keydownHandler(){
//     keyIsPressed = true;
// }

// function keyupHandler() {
//     keyIsPressed = false;
// }



// TOGGLE ANIMATION ON KEY PRESS
// let x = 100;
// let animate = false;

// requestAnimationFrame(draw);
// function draw() {
//     // UPDATE ELEMENTS ON CANVAS

//     // Control animation with boolean variable
//     if (animate) {
//         x += 2;
//     }
//     if (x > 600) {
//         x = -100
//     }

//     // DRAW CANVAS
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, cnv.width, cnv.height);

//     ctx.fillStyle = "yellow";
//     ctx.fillRect(x , 100, 50, 50);

//     requestAnimationFrame(draw);
// }

// // EVT listeners
// document.addEventListener("keydown", keydownHandler);

// function keydownHandler() {
//     if (animate) {
//         animate = !animate;
//     } else {
//         animate = true;
//     }
// }
// Event Listeners & Handlers
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}
