const number = document.querySelector("#number")
const calculateButton = document.querySelector("#calculateButton")
const result = document.querySelector("#result")

function calculateFactorial(number){
    if (number == '') {
        alert("Please digit a number.")
        return ''
    }

    if (number == 1) {
        return 1
    } else {
        return number * calculateFactorial(number - 1)
    }
}

calculateButton.addEventListener("click", () => {
    const fatorial = calculateFactorial(number.value)
    result.textContent = fatorial
})
