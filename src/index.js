import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startRef.addEventListener('click', colorStart);
stopRef.addEventListener('click', colorStop);

stopRef.disabled = true;

let interval = null;

function colorSwitch() {
    return bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
};

function colorStart() {
    stopRef.disabled = false;
    startRef.disabled = true;
    interval = setInterval(colorSwitch, 500);
};

function colorStop() {
    stopRef.disabled = true;
    startRef.disabled = false;
    clearInterval(interval);
};