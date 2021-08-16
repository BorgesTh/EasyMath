let imputedFactValues = [];
let btn3_calc = document.querySelector('button#btn3-calc');

function addValuesFact(input_number, printed_values) {
    
    if (input_number <= 0) return;

    imputedFactValues.push(input_number)

    printed_values.innerHTML += `${imputedFactValues.length > 1 ? ', ' : ''}${input_number}`
    
    btn3_calc.disabled = false;
}

function calculateFactorials(result_box) {

    if (imputedFactValues = []) return;

    let calculatedFactorials = [];

    result_box.innerHTML = '';

    imputedFactValues.map((num) => {
        let calculated = calculateFactForNumber(num);
        calculatedFactorials.push(calculated);
    })

    function calculateFactForNumber(num) {
        return num < 2 ? 1 : num * calculateFactForNumber(num - 1);     
    }

    for (var i = 0; i < calculatedFactorials.length; i++) {
        result_box.innerHTML += `<abbr title='copy'><div class='printed-results' onclick='copyContent(this.textContent)'>${imputedFactValues[i]}! = ${calculatedFactorials[i]}</div></abbr>`
    }

    btn3_calc.disabled = true;
}

function resetFactorial(printed_values, result_box) {
    imputedFactValues = [];
    printed_values.innerHTML = '';
    result_box.innerHTML = '';
    btn3_calc.disabled = false;
}