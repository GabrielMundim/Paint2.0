const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const changeColorButton = document.getElementById('changeColorButton');
const clearCanvas = document.getElementById('Clear');
const cor = document.getElementById('cor');
const apague = document.getElementById('apague');
const Radius = document.getElementById('Radio');
const copia = document.getElementById('copia');
const send = document.getElementById('send');
const preenche = document.getElementById('preenche');

const red = document.getElementById('red');
const laranja = document.getElementById('laranja');
const amarelo = document.getElementById('amarelo');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const indigo = document.getElementById('indigo');
const violet = document.getElementById('violet');

const AdCol = document.getElementById('AdCol');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

const circle = {
    colorIndex: 0,
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
};
Radius.value = 30
copia.value = 30
function CRadius () {
if (copia.value > 100 || copia.value < 2) {
    window.alert('O valor da medida tem que estar entre 2 e 100')
}
else {
    Radius.value = copia.value;
    
}}


function drawCircle(event) {
        ctx.beginPath();
        ctx.arc(event.clientX -185, event.clientY -90, Radius.value, 0, Math.PI * 2);
        ctx.fillStyle = cor.style.color
        ctx.fill();
        ctx.closePath();
}

let isDragging = false;

function handlePointerDown(event) {
        isDragging = true;
        canvas.setPointerCapture(event.pointerId)
       drawCircle(event)
}

function handlePointerMove(event) {
    if (!isDragging) return; 
       
    drawCircle(event)

}

function handlePointerUp() {
    isDragging = false;
}

function handleErase() {
cor.style.color = 'white'
cor.innerHTML = `Eraser`
}

function ClearCanv() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function fullScreenPaint () {
    if(cor.style.color == 'white') {
        console.log('Sorry NooOOOBBbbb')
    } else {ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 1000, 0, Math.PI * 2);
    ctx.fillStyle = cor.style.color
    ctx.fill();
    ctx.closePath();
}}

cor.innerHTML = `Cor: ${circle.colors[circle.colorIndex]}`
cor.style.color = circle.colors[circle.colorIndex];
function change() {
    cor.innerHTML = `Cor: ${circle.colors[circle.colorIndex]}`
    cor.style.color = circle.colors[circle.colorIndex];
}
function doRed() {
    circle.colorIndex = (circle.colorIndex * 0) % circle.colors.length;
    change();
}
function doOrange() {
    circle.colorIndex = (circle.colorIndex * 0 + 1) % circle.colors.length;
    change();
}
function doYellow() {
    circle.colorIndex = (circle.colorIndex * 0 + 2) % circle.colors.length;
    change();
}
function doGreen() {
    circle.colorIndex = (circle.colorIndex * 0 + 3) % circle.colors.length;
    change();
}
function doBlue() {
    circle.colorIndex = (circle.colorIndex * 0 + 4) % circle.colors.length;
    change();
}
function doIndigo() {
    circle.colorIndex = (circle.colorIndex * 0 + 5) % circle.colors.length;
    change();
}
function doViolet() {
    circle.colorIndex = (circle.colorIndex * 0 + 6) % circle.colors.length;
    change();
}
function advancedColor() {
    cor.innerHTML = `Cor: ${changeColorButton.value}`;
    cor.style.color = changeColorButton.value;
    AdCol.style.backgroundColor = changeColorButton.value;
}

canvas.addEventListener('pointerdown', handlePointerDown,);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
canvas.addEventListener('pointercancel', handlePointerUp);

send.addEventListener('click', CRadius);
clearCanvas.addEventListener('click', ClearCanv);
apague.addEventListener('click', handleErase);
preenche.addEventListener('click', fullScreenPaint);

red.addEventListener('click', doRed);
laranja.addEventListener('click', doOrange);
amarelo.addEventListener('click', doYellow);
green.addEventListener('click', doGreen);
blue.addEventListener('click', doBlue);
indigo.addEventListener('click', doIndigo);
violet.addEventListener('click', doViolet);

changeColorButton.addEventListener('input', advancedColor);