console.log(isBetween(3)(6))

function isBetween(min) {
    return function(max) {
        const array = [1,2,3,4,5,6,7,8,9,10]
        const result = []
        for(let i = 0; i < array.length; i++) {
            if(i >= min && i <= max) {
                result.push(array[i - 1])
            }
        }
        return result
    }
}


// ----------------------------------------------------------------------------------------------------------------


let oper = prompt('Введите операцию (+,-,*,/,pow)')

while(oper !== '+' && oper !== '-' && oper !== '*' && oper !== '/' && oper !== 'pow') {
    oper = prompt('Введите операцию (+,-,*,/,**)')
}

const firstNum = +prompt('Введите первое число')

const secondNum = +prompt('Введите второе число')

console.log(calculation(oper)(firstNum)(secondNum))

function calculation(operation) {
    return function(firstNum) {
        return function(secondNum) {
            switch(operation) {
                case '+':
                    return firstNum + secondNum
                break;

                case '-':
                    return firstNum - secondNum
                break;

                case '*':
                    return firstNum * secondNum
                break;

                case '/':
                    return firstNum / secondNum
                break;

                case 'pow':
                    let result = firstNum
                    for(let i = 1; i < secondNum; i++) {
                        result *= firstNum
                    }
                    return result
                break;

                default:
                    return 'ERROR';
            }
        }
    }
}


// ----------------------------------------------------------------------------------------------------------------


const products = [
    {name: 'Product 3', quantity: 22, price: 35},
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55}
]

console.log(sortByField(products))

function sortByField(array) {
    const result = array.sort(function(a, b) {
        if(a.name < b.name) {
            return -1;
        }
    })
    return result
}
