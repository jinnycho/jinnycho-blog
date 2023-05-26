let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const gridLength = 13;

window.onload = function() {
    // 1. Front text
    let frontTextContainer = document.getElementById('front-greeting');
    frontTextContainer.textContent = getFrontTextOptions();

    // 2. Cursor graphics
    let gridContainer = document.getElementById('grid-container');
    for(let i = 0; i < viewportWidth/gridLength; i++){
        for (let j = 0; j < viewportHeight/gridLength; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-item");
            gridElement.style.backgroundColor = getRandomColor();
            gridContainer.appendChild(gridElement); 
        }
    }
}

function getFrontTextOptions() {
    let frontTextsOptions = [
        "Hello"
    ];

    return frontTextsOptions[Math.floor(Math.random() * 3)];
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}  