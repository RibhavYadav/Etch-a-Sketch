// Get the grid size from the slider
let slider = document.getElementById("slider");
let value = document.querySelector('.grid');
value.textContent = slider.value;

function calcSliderValue() {
    let valuePercentage = (slider.value / slider.max) * (100);
    slider.style.background = `linear-gradient(to right, black ${valuePercentage}%, #f5f5f5 ${valuePercentage}%)`;
}

// Get initial slider background at start
calcSliderValue()

slider.addEventListener('input', (e) => {
    calcSliderValue();
    value.textContent = `${e.target.value} x ${e.target.value}`;
})

// Add 16x16 boxes to the canvas
const canvas = document.querySelector('.canvas');
const root = document.documentElement
let boxesPerSide = Number(slider.value);

// Function to create the grid
function createGrid() {
    canvas.innerHTML = ''; // Clear the existing canvas
    for (let i = 0; i < boxesPerSide * boxesPerSide; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        canvas.appendChild(div);
    }
    root.style.setProperty("--num-boxes", slider.value);
    addDrawingEventListeners(); // Reapply the event listeners
}

// Create initial grid on page load
createGrid();

// Event listener to create a new grid
const updateGridButton = document.getElementById("update-grid");
updateGridButton.addEventListener("click", () => {
    boxesPerSide = Number(slider.value);
    createGrid();
});

// Add event listeners to color the boxes
function addDrawingEventListeners() {
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
}

// Event listener to reset all colors
const resetButton = document.getElementById("reset-btn");
const boxes = document.getElementsByClassName('box');
resetButton.addEventListener('click', () => {
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = "white";
    });
});
