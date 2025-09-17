let output = document.getElementById("output")
let firstInput = document.getElementById("first-number")
let secondInput = document.getElementById("second-number")

function addition(){
    if (firstInput.value == "" || secondInput.value == ""){
        output.innerHTML = "Please enter numbers in both inputs"
    }
    else {
        res = parseInt(firstInput.value) + parseInt(secondInput.value)
        output.innerHTML = String(res)
        firstInput.value = ""
        secondInput.value = ""
        checkNegative(res)
    }
}

function subtraction(){
    if (firstInput.value == "" || secondInput.value == ""){
        output.innerHTML = "Please enter numbers in both inputs"
    }
    else {
        let res = parseInt(firstInput.value) - parseInt(secondInput.value)
        output.innerHTML = String(res)
        firstInput.value = ""
        secondInput.value = ""
        checkNegative(res)
    }
}

function multiplication(){
    if (firstInput.value == "" || secondInput.value == ""){
        output.innerHTML = "Please enter numbers in both inputs"
    }
    else {
        let res = parseInt(firstInput.value) * parseInt(secondInput.value)
        output.innerHTML = String(res)
        firstInput.value = ""
        secondInput.value = ""
        checkNegative(res)
    }
}

function division(){
    if (firstInput.value == "" || secondInput.value == ""){
        output.innerHTML = "Please enter numbers in both inputs"
    }
    else {
        let res = parseInt(firstInput.value) / parseInt(secondInput.value)
        output.innerHTML = String(res)
        firstInput.value = ""
        secondInput.value = ""
        checkNegative(res)
    }
}

function power(){
    if (firstInput.value == "" || secondInput.value == ""){
        output.innerHTML = "Please enter numbers in both inputs"
    }
    else {
        let res = 1
        // Math.abs gives a positive value if there's a negative exponent
        for (let i = 0; i < Math.abs(parseInt(secondInput.value)); i=i+1){
                res = res * firstInput.value
        }
        if (parseInt(secondInput.value) < 0) {
            res = 1 / res
        }

        output.innerHTML = String(res)
        firstInput.value = ""
        secondInput.value = ""
        checkNegative(res)
    }
}

function clearInputs(){
    output.innerHTML = ''
    firstInput.value = ""
    secondInput.value = ""
}

function checkNegative(number){
    if (number < 0){
        output.className = "negative"
    }
    else {
        output.className = "positive"
    }
}