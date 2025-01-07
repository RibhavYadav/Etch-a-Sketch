// Get the grid size from the slider
let slider = document.getElementById("slider");
let value = document.querySelector('.grid');
value.textContent = slider.value;

function calcSliderValue() {
    let valuePercentage = (slider.value / slider.max) * (100);
    slider.style.background = `linear-gradient(to right, black ${valuePercentage}%, #f5f5f5 ${valuePercentage}%)`;
}
calcSliderValue()

slider.addEventListener('input', (e) => {
    calcSliderValue();
    value.textContent = `${e.target.value} x ${e.target.value}`;
})

// Add 16x16 boxes to the canvas
const canvas = document.querySelector('.canvas');
for (let i = 0; i < 16 * 16; i++) {
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
