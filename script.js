let colorChoice = "#000000";
const container = document.getElementById("container");
let grids;

// Pixel size choice
function pixels() {
   let squares = document.getElementById("pixel").value;
   grids = squares;
   myGrid(grids);
}

// Loop grid size
function myGrid(grid){
    for (let i = 0; i < (grid * grid); i++) {
        let cell = document.createElement("div");
        
        // Add css grid template
        container.style.display = "grid";
        container.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${grids}, 1fr)`;

        // Put all div in a container
        container.appendChild(cell).className = "grid-item";

        // Hover Effect
        cell.addEventListener("mouseover", (x => cell.style.backgroundColor = colorChoice));
        
    }
}

// Color choice
function myColor() {
   let color = document.getElementById("choice").value;
   colorChoice = color; 
}

function resetBtn(contain) {
    while (contain.firstChild) contain.removeChild(contain.firstChild);
    document.getElementById("pixel").value = "1";
    document.getElementById("outPut").innerHTML = "1";
   
}
