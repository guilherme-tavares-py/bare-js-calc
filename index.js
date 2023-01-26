let display = document.getElementById('screen')

let calculation = []

const number = (value) => {
    display.innerHTML += value
}
const operator = (value) => {
    if (display.innerHTML) {
        calculation.push(display.innerHTML)
        calculation.push(value)
        display.innerHTML = null
    }

    if (value = "=") {
        console.log(calculation)
    }

}