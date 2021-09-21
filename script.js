let container = document.getElementById("#container")
let createButton = document.querySelector(".create")
let resetButton = document.querySelector(".reset")
let input = document.querySelector("input")
let color = changeColor() 


function createGrid() {
    columnsAndRows = input.value
    container.style.gridTemplateColumns = `repeat(${columnsAndRows}, 1fr)`
    container.style.gridTemplateRows = `repeat(${columnsAndRows}, 1fr)`
    container.style.gridGap = "1px"
    
    for (let i = 0; i < (rows * columns); i++) {
        let div = document.createElement("div")
        div.addEventListener("mouseover" , e => e.target.classList.add("hover"))
        div.classList.add("square")
        div.style.backgroundColor = "black"
        container.appendChild(div)
    }
}

function resetGrid() {
   
    
}

function changeColor () {


}

createButton.addEventListener("click" , createGrid)
resetButton.addEventListener("click" , resetGrid)

// if (userInput <= 100) {
//     return true
// }
// else if (userInput <= 0) {
//     return false
// }
// else {
//     return false
// }

// for (let i = 0; i < (num * num); i++) {
//     let div = document.createElement("div")
//     div.addEventListener("mouseover" , e => e.target.classList.add("hover"))
//     div.classList.add("square")
//     container.appendChild(div)
// }
// let clearDiv = document.querySelectorAll(".square")
//     clearDiv.forEach(square => square.classList.remove("hover"))
//     let userInput = prompt("Enter A Number To Create A New Grid" , " " )
