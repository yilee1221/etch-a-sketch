const gridSize = 16;
const grid = document.querySelector(".grid");
let mouseDown = false;
// Check mouse down for click and drag to draw
grid.addEventListener('mousedown', () => {
    mouseDown = true;
});
grid.addEventListener("mouseup", () => {
    mouseDown = false;
});
grid.addEventListener("mouseleave", () => {
    mouseDown = false;
});

// Make grid and draw
function updateGrid(size) {
    let newSize = size;
    grid.innerHTML = "";
    console.log(grid)
    grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    for (let i=0; i < newSize; i++) {
        for (let j=0; j < newSize; j++) {
            const square = document.createElement("div");
            square.classList.add('square');
            grid.appendChild(square);
        }
    }
    let pixels = document.querySelectorAll('.square');
    pixels.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if(square.style.backgroundColor == "")
                square.style.backgroundColor = color;
        }); 
        square.addEventListener('mouseover', fillColor);
    });
}

// Get input for grid size and update grid
const inputSize = document.querySelector('.inputSize');
const displaySize = document.querySelector('#size');
displaySize.textContent = inputSize.value;
inputSize.addEventListener("input",() => {
    displaySize.textContent = inputSize.value;
    updateGrid(inputSize.value);
});
//Get input for color
let color = "#000000"; 
const colorPicker = document.getElementById("pickColor");
colorPicker.addEventListener("input", () => {
    color = colorPicker.value;
});
// fill in squares if not filled in and mouse is down 
function fillColor() {
    if(this.style.backgroundColor == "" && mouseDown)
        this.style.backgroundColor = color;
}

updateGrid(gridSize);
