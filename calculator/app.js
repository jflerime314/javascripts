// let screen = document.getElementById("operation-value")

// screen.innerHTML = "Op"

// let listOfButtons = document.getElementsByClassName("button")

// console.log("list of buttons: ", listOfButtons)
// for (var i=0; i<listOfButtons.length; i++){
//     console.log(listOfButtons[i].children[0].children[0].textContent)
// }

// function parser(currentOp, value){

// }


let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
    }
    // cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.right = (Math.cos(angle) * 200) + "px";
    // cat.style.bottom = (Math.cos(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}

function animateCarousselPicRight(cPic) {
    const recSize = cPic.getBoundingClientRect()
    const picContainer = cPic.parentElement
    console.log("rec size: ", recSize)
    console.log("offsets: ", cPic.offsetLeft, cPic.offsetTop)
    console.log("container ", picContainer.getBoundingClientRect())
    let distance = (picContainer.getBoundingClientRect().width - recSize.width) / 2
    let currentDate = startDate = Date.now()

    let factor = 0
    let time = 2000
    let speed = distance / time
    while (currentDate < (startDate + time)) {
        factor = (currentDate - startDate)
        // console.log(factor," -------- this is current date: ", currentDate, " start date: ", startDate);
        if (factor % 1000 == 0){
            console.log("factor entre 1000: ", factor/1000)
            cPic.style.left = (10 * (factor/1000)) + "px"
            console.log("new value of left: ", cPic.style.left)
            currentDate = Date.now()
            console.log(" current value: ", currentDate, currentDate < (startDate + time))
        }
    }
    // console.log("rect size of parent: ", picContainer.getBoundingClientRect())

}
function animateCarousselPicLeft(cPic) {
    const recSize = cPic.getBoundingClientRect()
    const picContainer = cPic.parentElement
    // console.log("rect size: ", recSize)
    // console.log("moving distance: ", picContainer.getBoundingClientRect() )
}
// requestAnimationFrame(animate);


const carousselBtns = document.getElementsByClassName("caroussel-btn")
// console.log(carousselBtns)

// let allPictures = document.querySelectorAll(".caroussel-pic-ctn p img")
let allPictures2 = document.getElementsByClassName("cp-pic-ctn")

// console.log("all pictures: ", allPictures, " all 2: ", allPictures2)
let value = 0
let pressedNumb = 0
function carousselBtnEventHandler(event) {
    pressedNumb += 1;
    // console.log(testElement, " test element.....")
    numbPics = allPictures2.length
    if (event.target.innerText == ">") {
        console.log("Right")
        for (let i = 0; i < numbPics; i++) {
            // console.log("class list: ", allPictures2[i].classList)
            if (allPictures2[i].classList.contains("active")) {
                animateCarousselPicRight(allPictures2[i])
                allPictures2[i].classList.remove("active")
                allPictures2[i].classList.add("inactive")
                if (i < numbPics - 1) {
                    allPictures2[i + 1].classList.remove("inactive")
                    allPictures2[i + 1].classList.add("active")
                    break;
                } else {
                    allPictures2[0].classList.remove("inactive")
                    allPictures2[0].classList.add("active")
                    break;
                }
            }
        }

    } else {
        for (let i = 0; i < numbPics; i++) {
            console.log("class list: ", allPictures2[i].classList)
            if (allPictures2[i].classList.contains("active")) {
                animateCarousselPicLeft(allPictures2[i])
                allPictures2[i].classList.remove("active")
                allPictures2[i].classList.add("inactive")
                if (i > 0) {
                    allPictures2[i - 1].classList.remove("inactive")
                    allPictures2[i - 1].classList.add("active")
                    break;
                } else {
                    allPictures2[numbPics - 1].classList.remove("inactive")
                    allPictures2[numbPics - 1].classList.add("active")
                    break;
                }
            }
        }
    }

}
function addEventListenerCarousselBtn(carousselBtns) {
    for (let i = 0; i < carousselBtns.length; i++) {
        // console.log(carousselBtns[i])
        carousselBtns[i].addEventListener("click", carousselBtnEventHandler);
    }
}


addEventListenerCarousselBtn(carousselBtns)