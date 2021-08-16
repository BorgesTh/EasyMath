let numbers = []
let MMCcheck = true;
let multiplier = 1;

function addValuesMMC(input_number, printed_values) {
    if (input_number <= 0) return;
    
    numbers.push(input_number);
    
    printed_values.innerHTML += `${numbers.length > 1 ? ', ' : ''}${input_number}`;

    document.querySelector('button#btn2-calc').disabled = false; 
}

function calculateMMC(printed_result) {
    if (numbers.length <= 1) return;
    
    let higher_value = Math.max.apply(null, numbers) // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    
    calculateMultiples(higher_value)

    function calculateMultiples(higher_valueM) {
        
        higher_valueM = higher_valueM * multiplier;
        
        numbers.map(division);

        function division(n) {
            if (higher_valueM % n == 0) {
                MMCcheck = MMCcheck && true;
            } else {
                MMCcheck = MMCcheck && false;
            }
        } 
        
        multiplier++

        if (MMCcheck) {
            printed_result.innerHTML = higher_valueM;
            document.querySelector('button#btn2-calc').disabled = true;
            higher_valueM = higher_value;
            multiplier = 1;
            return; 
        } else {
            MMCcheck = true;
            calculateMultiples(higher_valueM);
        }
    }
    
}

function resetMMC(printed_values, printed_result) {
    if (numbers.length == 0) return;
    numbers = []
    printed_values.innerHTML = ''
    printed_result.innerHTML = 'Resultado...'
    document.querySelector('button#btn2-calc').disabled = false;    
}