let container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.height = "100vh";
container.style.width = "100vw";

document.body.appendChild(container);

let button = document.createElement("button");
button.style.position = "absolute";
button.style.width = "200px";
button.style.height = "40px";
button.style.border = "unset";
button.style.backgroundColor = "black";
button.style.border = "1px solid white";
button.style.top = "20px";
button.style.left = "calc( 50% - 100px )";
button.style.cursor = "pointer";
button.style.color = "white";
button.innerText = "CHANGE GRID SQUARES"

document.body.appendChild(button);
button.addEventListener("click", changeGrid)

let squareNumber = 16;

recalculateSquares();

function changeGrid () {
    let gridNew = prompt("Select a new number of side squares")
    if (gridNew === null) {
        return;
    } 

    gridNew = parseInt(gridNew);

    if (isNaN(gridNew) || gridNew <= 1 || gridNew > 100) {
        alert("Please enter a valid number between 2 and 100")
        return;
    }

    squareNumber = gridNew;
    recalculateSquares();
}

function recalculateSquares() {
    let squares = Math.pow(squareNumber, 2);
    const squareWidthPercentage = 100 / Math.sqrt(squares) + "%";
    
    container.innerHTML = "";

    for (let i = 0; i < squares; i++) {
        
        let square = document.createElement("div");
        container.appendChild(square)

        square.style.transition = "all 500ms ease-out";
        square.style.width = squareWidthPercentage;
        square.style.height = squareWidthPercentage;
        square.style.backgroundColor = "white";
        square.style.border = "1px solid black";

        square.addEventListener("mouseover", tileColor)

        function tileColor() {
            let randomR = Math.floor(Math.random() * 255)
            let randomG = Math.floor(Math.random() * 255)
            let randomB = Math.floor(Math.random() * 255)
            square.style.backgroundColor = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
        }

        let reset = document.createElement("button");
        reset.style.position = "absolute";
        reset.style.width = "100px";
        reset.style.height = "40px";
        reset.style.border = "unset";
        reset.style.backgroundColor = "black";
        reset.style.border = "1px solid white";
        reset.style.bottom = "20px";
        reset.style.left = "calc( 50% - 50px )";
        reset.style.cursor = "pointer";
        reset.style.color = "white";
        reset.innerText = "RESET"

        document.body.appendChild(reset);
        reset.addEventListener("click", resetSquares)

        function resetSquares() {
            let squares = container.querySelectorAll("div");
            squares.forEach(square => {
                square.style.backgroundColor = "white";
            })
        }
    }
}
