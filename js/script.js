let someStr = prompt('Введите какое-то слово')

while (someStr == false || someStr === null) {
    someStr = prompt('Введите какое-то слово')
}

let someNum = +prompt('Введите какое-то число')

while (someNum == false || someNum === null) {
    someNum = prompt('Введите число!')
}


if (someStr.length >= someNum) {
    console.log(someStr.substring(0, someNum))
} else {
    
    const someSide = confirm('В какую сторону будет заполняться пустота? Ок - лево / Отмена - право')

    console.log(dd(someStr, someNum, '*', someSide))

    function dd(str, num, symbol, side) {

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
