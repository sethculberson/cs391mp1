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
        let res = parseInt(firstInput.value) + parseInt(secondInput.value)
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