console.log(fizzBuzz(15))

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if(i % 3 === 0) {
            console.log('fizz')
        } else if(i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}


// -----------------------------------------------------------------------------------------------------------------


const array = ['a','e','i','o','u']

console.log(getVowels('Hello World from Ukraine', array))

function getVowels(word, vowelsArr) {
    let result = 0

    for(let i = 0; i < word.length; i++) {
        vowelsArr.forEach(value => {
            if(word[i] === value) {
                result += 1
            }
        });
    }

    return `Количество гласных: ${result}`
}


// -----------------------------------------------------------------------------------------------------------------


function fib(num) {
    let fibArr = [0,1];

    for (var i = 2; i < num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }

    return fibArr.reverse()[0]
}

console.log(fib(5));