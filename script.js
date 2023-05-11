const grid = document.querySelector(".grid");
grid.style.gridTemplateRows = `repeat(16, 1fr)`;
grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
for (let i=0; i < 16; i++) {
    for (let j=0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add('squares');
        square.style.width = "40px";
        square.style.height = "40px";
        grid.appendChild(square);
    }
}
function filled() {
    this.classList.add('fill');
}
const pixels = document.querySelectorAll('.squares');
pixels.forEach((square) => {
    square.addEventListener('mouseover', filled);
});

