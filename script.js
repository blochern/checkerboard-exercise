// global 'body' variable
const body = document.body;

// create a container div to hold tiles
const checkerboard = document.createElement('div');
// append it to the body
body.appendChild(checkerboard);

// style the checkerboard to meet limitations
checkerboard.style.width = "800px";
checkerboard.style.height = "800px";
checkerboard.style.display = "flex";
checkerboard.style.flexWrap = "wrap";

// add a border to the checkerboard to make it look dope
checkerboard.style.border = "solid black 10px";

// this loop runs 64 times
for (let i = 0; i < 64; i++) {
    // create a checkerboard tile (div) element
    let tile = document.createElement("div");
    // append it to the checkerboard
    checkerboard.appendChild(tile);
    // give it height and width
    tile.style.height = "12.5%";
    tile.style.width = "12.5%";
    // give it a random background color
    tile.style.backgroundColor = randomColor();
}

function randomColor() {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}