const canvas = document.querySelector('.canvas');

// Add 16 * 16 boxes to the canvas
for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('box')
    canvas.appendChild(div);
}

// Add event listeners to color the boxes
let isDrawing = false;
function colorBox(e){
    if (isDrawing){
        e.target.style.backgroundColor = 'blue';
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    colorBox(e);
});

canvas.addEventListener('mousemove', (e) => {
    colorBox(e);
})

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
})
