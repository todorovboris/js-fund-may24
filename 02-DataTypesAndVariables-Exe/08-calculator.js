function exe02(num1, operator, num2){
    let sum = 0;

    switch(operator){
        case "+":
            sum = num1 + num2;
        break;

        case "-":
            sum = num1 - num2;
        break;

        case "*":
            sum = num1 * num2;
        break;

        case "/":
            sum = num1 / num2;
        break;
    }

    console.log(sum.toFixed(2));
}

exe02(5,'+',10);