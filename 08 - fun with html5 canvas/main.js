const brushWidthElem = document.getElementById('brushWidth');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let last = {
    x: 0,
    y : 0
};
let hue = 0;
let direction = true;

function draw (mouseMoving) {
    if(!isDrawing) return;
    ctx.strokeStyle = `rgba(${last.x % 256},${last.y % 256},${(last.x * last.y - 15) % 256},30)`;
    ctx.beginPath();
    ctx.moveTo(last.x,last.y);
    ctx.lineTo(mouseMoving.offsetX,mouseMoving.offsetY);
    ctx.stroke();
    [last.x,last.y] = [mouseMoving.offsetX,mouseMoving.offsetY];
}
 

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [last.x, last.y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
brushWidthElem.addEventListener('change', () => ctx.lineWidth = brushWidthElem.value);
