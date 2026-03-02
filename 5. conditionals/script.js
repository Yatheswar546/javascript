/////////// PROBLEMS //////////

// 1. build a calculator using switch

function calculate(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;
    let result;

    switch(operator){
        case '+' : 
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2===0){
                result = "Can't divide with 0";
                break;
            } else{
                result = num1 / num2;
                break;
            }
        case '**':
            result = num1 ** num2;
            break;

        default:
            result = "Invalid Operator"
    }

    // document.getElementById("result").innerText = "Result: " + result;
    let resultDisplay = document.getElementById("result");

    resultDisplay.innerHTML = "Result is: " + result;

}

