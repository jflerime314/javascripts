let screen = document.getElementById("operation-value")

screen.innerHTML = "Op"

let listOfButtons = document.getElementsByClassName("button")

console.log("list of buttons: ", listOfButtons)
for (var i=0; i<listOfButtons.length; i++){
    console.log(listOfButtons[i].children[0].children[0].textContent)
}

function parser(currentOp, value){

}