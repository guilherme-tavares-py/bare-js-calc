let display = document.getElementById('screen')

let calculation = {
    firstValue: 0,
    secondValue: 0,
    operator: '',
    result: 0
}

const number = (value) => {
    if (display.innerHTML == 'invalid input') {
        display.innerHTML = null
    }
    display.innerHTML += value
}

const operator = (value) => {

    if (display.innerHTML) {
        
        if (calculation.firstValue == 0) {
            calculation.firstValue = display.innerHTML
        }
        if (calculation.firstValue) {

            calculation.secondValue = display.innerHTML
        }
  
        if (calculation.operator == '') {
            calculation.operator = value
        }

        display.innerHTML = null
    } else {
        display.innerHTML = 'invalid input'
        calculation.firstValue = 0
        calculation.secondValue = 0
        calculation.operator = ''
        calculation.result = 0
    }

    if (value == "=") {

        switch (calculation.operator) {
            case "+":
                calculation.result = Number(calculation.firstValue) + Number(calculation.secondValue)
                break
            case "-":
                calculation.result = Number(calculation.firstValue) - Number(calculation.secondValue)
                break
            case "/":
                calculation.result = Number(calculation.firstValue) / Number(calculation.secondValue)
                break
            case "x":
                calculation.result = Number(calculation.firstValue) * Number(calculation.secondValue)
                break
        }

        display.innerHTML = calculation.result
     
    }

}

