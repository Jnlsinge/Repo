var choices = parseInt(prompt("1 - ADD | 2 - SUBSTRACT | 3 - MULTIPLY | 4 - DIVIDE"));
var firstInput = parseInt(prompt("Enter First Number"));
var secondInput = parseInt(prompt("Enter Second Number"));

addition = (a,b) => {return a + b};
subtraction = (a,b) => {return a - b};
multiplication = (a,b) => {return a * b};
division = (a,b) => {return a / b};

switch(choices){
    case 1:
        alert(addition(firstInput, secondInput));
        break;
    case 2:
        alert(subtraction(firstInput, secondInput));
        break;
    case 3:
        alert(multiplication(firstInput, secondInput));
        break;
    case 4:
        alert(division(firstInput, secondInput));
        break;
    }


