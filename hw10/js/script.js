console.log([1,2,3,4,5,6,7,8,9,10].filter(isBetween(3,6)))

function isBetween(min, max) {
    return function(num)  {
        return num >= min && num <= max
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
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35}
]

products.sort(sortByField('quantity', 'desc'))

function sortByField(fieledName, sortType) {
    return function(a, b) {
        switch(sortType) {
            case 'desc':
                if(fieledName === 'quantity') {
                    if(a.quantity < b.quantity) {
                        return -1;
                    }
                } else if(fieledName === 'price') {
                    if(a.price < b.price) {
                        return -1;
                    }
                } else if(fieledName === 'name') {
                    if(a.name < b.name) {
                        return -1;
                    }
                }
            break;

            case 'asc':
                if(fieledName === 'quantity') {
                    if(a.quantity > b.quantity) {
                        return -1;
                    }
                } else if(fieledName === 'price') {
                    if(a.price > b.price) {
                        return -1;
                    }
                } else if(fieledName === 'name') {
                    if(a.name > b.name) {
                        return -1;
                    }
                }
            break;
            default: return 0

        }
    }
}

console.log(products)