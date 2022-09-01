let someStr = prompt('Введите какое-то слово')

while (!Boolean(someStr)) {
    someStr = prompt('Введите какое-то слово')
}

let someNum = +prompt('Введите какое-то число')

while (!Boolean(someNum)) {
    someNum = +prompt('Введите число!')
}

let someSide = ''

if(someStr.length < someNum) {
    someSide = confirm('В какую сторону будет заполняться пустота? Ок - лево / Отмена - право')
}

const funcResult = padString(someStr, someNum, '*', someSide)
console.log(funcResult)

function padString(str, num, symbol, side) {
    if (str.length >= num) {
        return str.substring(0, someNum)
    } else {
        let result = ''

        for(let i = 0; num - str.length > i; i++) {
            result += symbol
        }

        if(side) {
            return result + str
        } else {
            return str + result
        }
    }
}
