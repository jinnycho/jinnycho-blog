let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const gridLength = 13;

window.onload = function() {
    // 1. Cursor graphics
    let gridContainer = document.getElementById('grid-container');
    for(let i = 0; i < viewportWidth/gridLength; i++){
        for (let j = 0; j < viewportHeight/gridLength; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-item");
            gridElement.style.backgroundColor = getRandomColor();
            gridContainer.appendChild(gridElement); 
        }
    }

    // 2. Connect the centrl ball to mindmap-1(s)
    var mindMap1Div = document.getElementById("mindmap-1");
    var mindMap1Children = mindMap1Div.querySelectorAll("a");

    mindMap1Children.forEach(function(mindMap1Child) {
        console.log(mindMap1Child.innerHTML);
        console.log(mindMap1Child.offsetWidth);
        console.log(mindMap1Child.offsetHeight);
        console.log('------');

    });
  
}

function getRandomNumber() {
    return Math.ceil(Math.random() * 720) * (Math.round(Math.random()) ? 1 : -1);
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}  