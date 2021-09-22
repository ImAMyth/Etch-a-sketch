let container = document.querySelector("#container")
let createButton = document.querySelector(".create")
let resetButton = document.querySelector(".reset")
let input = document.querySelector("input")
let color = changeColor()

window.onload = createGrid


function createGrid() {
    if (container.firstElementChild) {
        while (container.firstElementChild) {
            container.removeChild(container.firstElementChild)
        }
    }
    columnsAndRows = input.value
    container.style.gridTemplateColumns = `repeat(${columnsAndRows}, 1fr)`
    container.style.gridTemplateRows = `repeat(${columnsAndRows})`
    container.style.gridGap = "1px"

    for (let i = 0; i < (columnsAndRows * columnsAndRows); i++) {
        let div = document.createElement("div")
        div.classList.add("square")
        div.style.backgroundColor = "white"
        div.addEventListener("mouseover", mouseOver)
        container.appendChild(div)
    }

}

function resetGrid() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => square.style.backgroundColor = "white")
    color = changeColor()
}

function mouseOver(e) {
    e.target.style.backgroundColor = color
}

function changeColor() {
    let colorOne = Math.floor(Math.random() * 256);
    let colorTwo = Math.floor(Math.random() * 256);
    let colorThree = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`
    return randomColor
}

createButton.addEventListener("click", createGrid)
resetButton.addEventListener("click", resetGrid)