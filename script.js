let container = document.getElementById("container");
let button = document.querySelector("button")
button.addEventListener("click" , resetAndCreateGrid)

function createGrid(rows , columns) {
    for (let i = 0; i < (rows * columns); i++) {
        let div = document.createElement("div")
        div.addEventListener("mouseover" , e => e.target.classList.add("hover"))
        div.classList.add("square")
        container.appendChild(div)
    }
}
createGrid(16 , 16);

function resetAndCreateGrid(rows , columns) {
    let resetDiv = document.querySelectorAll(".square")
    resetDiv.forEach(square => square.classList.remove("hover"))
    // prompt user for 2 numbers for rows and columns
    // create grid from those 2 numbers
    // set max limit for each user input up to 100

}



