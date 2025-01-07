const canvas = document.querySelector('.canvas');
let numBoxes = 16;

// Add 16x16 boxes to the canvas
for (let i = 0; i < numBoxes * numBoxes; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    canvas.appendChild(div);
}

// Add event listeners to color the boxes
let isDrawing = false;
function colorBox(e) {
    if (isDrawing && e.target.classList.contains('box')) {
        e.target.style.backgroundColor = 'blue';
    }
}

canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDrawing = true;
    colorBox(e);
});

canvas.addEventListener('mousemove', (e) => {
    colorBox(e);
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Event listener to reset all colors
const reset = document.getElementById("reset-btn");
const boxes = document.getElementsByClassName('box');
reset.addEventListener('click', () => {
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = "white";
    });
});
