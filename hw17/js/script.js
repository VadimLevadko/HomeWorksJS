function getSummation() {
    let result = 0

    return function(num) {
        result += num
        return result
    }
}

const sum = getSummation()



function counter(firstVal, step) {
    let count = firstVal

    return function(clear = false) {
        if (clear) {
            count = 0;
        }
        return count += step
    }
}

const step3 = counter(0,3)

console.log(step3());
console.log(step3());
console.log(step3());
console.log(step3(true));