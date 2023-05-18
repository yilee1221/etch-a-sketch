const gridSize = 16;
const grid = document.querySelector('.grid');
let mouseDown = false;
// Check mouse down for click and drag to draw
grid.addEventListener('mousedown', () => {
    mouseDown = true;
});
grid.addEventListener('mouseup', () => {
    mouseDown = false;
});
grid.addEventListener('mouseleave', () => {
    mouseDown = false;
});

let erase = false;
let randomColor = false;
const randomButton = document.querySelector('.random');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');

// Make grid and color, erase, and clear
function updateGrid(size) {
    let newSize = size
    grid.innerHTML = '';
    grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    for (let i=0; i < newSize; i++) {
        for (let j=0; j < newSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = '';
            grid.appendChild(square);
        }
    }
    // color the grid
    let pixels = document.querySelectorAll('.square');
    pixels.forEach((square) => {
        if (!erase) {
            square.addEventListener('mousedown', () => {
                if(square.style.backgroundColor == '')
                    fillColor(square);
            }); 
            square.addEventListener('mouseover', () => {
                if(square.style.backgroundColor == '' && mouseDown) {
                    fillColor(square);
                }
            });
        }
    });
    // activate random color
    randomButton.addEventListener('click', () => {
        randomColor = true;
        erase = false;
        randomButton.classList.add('active');
        eraserButton.classList.remove('active');
    });
    // activate eraser
    eraserButton.addEventListener('click', () => {
        erase = true;
        random = false;
        eraserButton.classList.add('active');
        randomButton.classList.remove('active');
    });
    // erase colors
    pixels.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (erase) square.style.backgroundColor = '';
        }); 
        square.addEventListener('mouseover', eraseColor);
    });
    // clear the grid
    clearButton.addEventListener('click', () => {
        pixels.forEach((square) => {
            square.style.backgroundColor = '';
        })
        erase = false;
        randomColor = false;
        eraserButton.classList.remove('active');
        randomButton.classList.remove('active');
    })
}

// Get input for grid size and update grid
const inputSize = document.querySelector('.inputSize');
const displaySize = document.querySelector('#size');
displaySize.textContent = `${inputSize.value} x ${inputSize.value}`;
inputSize.addEventListener('input',() => {
    displaySize.textContent = `${inputSize.value} x ${inputSize.value}`;
    updateGrid(inputSize.value);
});

//Get input for color
let color = '#000000'; 
const colorPicker = document.getElementById('pickColor');

colorPicker.addEventListener('input', () => {
    color = colorPicker.value;
});

colorPicker.addEventListener('click', () => {
    color = colorPicker.value;
    erase = false;
    randomColor = false;
    eraserButton.classList.remove('active');
    randomButton.classList.remove('active');
});

// fill in squares and check if random color
function fillColor(e) {
    if (!randomColor) {
        e.style.backgroundColor = color;
    }
    else {
        color = getRandomColor();
        e.style.backgroundColor = color;
    }
}

// erase color when mouse is down after clicking eraser
function eraseColor() {
    if(mouseDown && erase)
        this.style.backgroundColor = '';
}

// get a random color hex value
function getRandomColor() {
    const randomHex = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + randomHex;
    return color
}
updateGrid(gridSize);


