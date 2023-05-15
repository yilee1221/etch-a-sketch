const grid = document.querySelector(".grid");
grid.style.gridTemplateRows = `repeat(16, 1fr)`;
grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
const gridSize = 640;
for (let i=0; i < 16; i++) {
    for (let j=0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = "40px";
        square.style.height = "40px";
        square.hasAttribute
        grid.appendChild(square);
    }
}
let color = "#000000"; 
const colorPicker = document.getElementById("pickColor");
colorPicker.addEventListener("input", () => {
    color = colorPicker.value;
})
function fillColor() {
    if(this.style.backgroundColor == "" && mouseDown)
    this.style.backgroundColor = color;
}
let mouseDown = false;
const pixels = document.querySelectorAll('.square');
pixels.forEach((square) => {
    square.addEventListener('mousedown', () => {
        if(square.style.backgroundColor == "")
            square.style.backgroundColor = color;
    }); 
    square.addEventListener('mouseover', fillColor);
});



grid.addEventListener('mousedown', () => {
    mouseDown = true;
});

grid.addEventListener("mouseup", () => {
    mouseDown = false;
});

grid.addEventListener("mouseleave", () => {
    mouseDown = false;
});

