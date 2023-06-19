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
    let canvas = document.getElementById("mindMapCanvas");
    let ctx = canvas.getContext("2d");
    
    let circleDiv = document.getElementById("ball");
    var circle = circleDiv.getBoundingClientRect();
    let startX = circle.right;
    let startY = circle.bottom;
    console.log("circle", startX, startY);

    let mindMap1Div = document.getElementById("mindmap-1");
    let mindMap1Children = mindMap1Div.querySelectorAll("a");
    mindMap1Children.forEach(function(mindMap1Child) {
        var rect = mindMap1Child.getBoundingClientRect();
        let endX = rect.right;
        let endY = rect.bottom;
        console.log(mindMap1Child.innerHTML, endX, endY);
    });
  
    ctx.beginPath();
    ctx.moveTo(548, 394);
    ctx.lineTo(405.09375, 297.59375);
    ctx.stroke();

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