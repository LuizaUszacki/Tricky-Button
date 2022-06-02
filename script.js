let buttonElement = document.getElementById("button")
let viewportWidth
let viewportHeight

let buttonHalfSize

function changePosition() {
    resetTranslate()
    getViewportSize()
    setNewPositions()
}

function getViewportSize() {
    viewportWidth = window.innerWidth
    viewportHeight = window.innerHeight
}

function setNewPositions() {
    buttonElement.style.top = newAxisY() + "px"
    buttonElement.style.left = newAxisX() + "px"
}

function newAxisX() {
    let newX = Math.floor(Math.random() * (viewportWidth - 130)) + 10 // 130: Tamanho do botão mais 10px
    return newX
}

function newAxisY() {
    let newY = Math.floor(Math.random() * (viewportHeight - 130)) + 10 // 10: se o valor for o mínimo, ainda vai ter uma margem de 10px
    return newY
}

function resetTranslate() {
    buttonElement.style.transform = "translate(0, 0)"
}

function congratulations() {
    alert("Congratulations! You pressed the button!!! 🥳")
}