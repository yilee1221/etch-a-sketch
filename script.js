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

let erase = false;
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

// Make grid and draw
function updateGrid(size) {
    let newSize = size
    grid.innerHTML = "";
    grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    for (let i=0; i < newSize; i++) {
        for (let j=0; j < newSize; j++) {
            const square = document.createElement("div");
            square.classList.add('square');
            square.style.backgroundColor = "";
            grid.appendChild(square);
        }
    }
    let pixels = document.querySelectorAll('.square');
    pixels.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if(square.style.backgroundColor == "" && !erase)
                square.style.backgroundColor = color;
        }); 
        square.addEventListener('mouseover', fillColor);
    });

    eraserButton.addEventListener("click", () => erase = true);

    pixels.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (erase) square.style.backgroundColor = "";
        }); 
        square.addEventListener('mouseover', eraseColor);
        //square.addEventListener('mouseup', () => erase = false);
    });

    clearButton.addEventListener("click", () => {
        pixels.forEach((square) => {
            square.style.backgroundColor = "";
        })
    })
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
colorPicker.addEventListener("click", () => erase = false);

// fill in squares if not filled in and mouse is down and not eraser
function fillColor() {
    if(this.style.backgroundColor == "" && mouseDown && !erase)
        this.style.backgroundColor = color;
}
// erase color when mouse is down after clicking eraser
function eraseColor() {
    if(mouseDown && erase)
        this.style.backgroundColor = "";
}

updateGrid(gridSize);



