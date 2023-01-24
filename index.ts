import { question } from 'readline-sync';

type Op = '+' | '-' | '*' | '/';

function main(): void
{
    const firstStr: string = question("enter first  number: \n");
    const Operator: string = question("Enter operator: \n");
    const secondStr: string = question("enter second  number: \n");

    const validInput: boolean = isNumber(firstStr) && isOperator(Operator)  && isNumber(secondStr)
    
    if (validInput)
    {
        const firstNum: number = parseInt(firstStr)
        const secondNum: number = parseInt(secondStr)
        const result = calculate(firstNum, Operator as Op, secondNum)
        console.log(result)
    }

    else 
    {
        console.log('\n invalid input use one of that : "+" "-" "*" "/" \n')
        main();
        }
}

function calculate(firstNum: number, operator: Op, secondNum: number)
{
    switch (operator)
    {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        
    }
}

function isOperator(operator: string): boolean
{
    switch (operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default: return false

    }
}


function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum
}
main()