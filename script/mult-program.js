let imputedMultValues = [];
const multipleQuantity = 50;
let btn1_calc = document.querySelector('button#btn1-calc');

function addValuesMult(input_number, printed_values) {
    if (input_number == 0) return;

    imputedMultValues.push(input_number);

    printed_values.innerHTML += `${imputedMultValues.length > 1 ? ', ' : ''}${input_number}`

    btn1_calc.disabled = false;
}

function calculateMult(result_box) {

    if (imputedMultValues == []) return; 

    let calculatedMultiples = [];
    
    result_box.innerHTML = '';

    imputedMultValues.map((num) => {
        let calculated = calculateMultplesForNumber(num);
        calculatedMultiples.push(calculated);
    })

    function calculateMultplesForNumber(number) {
        
        let multiples = [];

        for (var i = 1; i <= multipleQuantity; i++) {
            multiples.push(number * i);
        }

        return multiples;

    }      

    for (var c = 0; c < imputedMultValues.length; c++) {

        result_box.innerHTML += `<abbr title='copy' onclick='copyContent(this.textContent)'><div class='printed-results${c} printed-results'><strong>M(${imputedMultValues[c]}):</strong></div></abbr>`;
        
        for (var i = 0; i < calculatedMultiples[c].length; i++) {
            
            document.querySelector(`div.printed-results${c}`).innerHTML += `${i > 0 ? ';' : '{'}${calculatedMultiples[c][i]}${i == calculatedMultiples[c].length - 1 ? '}' : ''}`;

        }
        
    }

    btn1_calc.disabled = true;

}

function resetMultiples(printed_values, result_box) {
    calculated = [];
    calculatedMultiples = []
    imputedMultValues = [];
    printed_values.innerHTML = '';
    result_box.innerHTML = '';
    btn1_calc.disabled = false;
}