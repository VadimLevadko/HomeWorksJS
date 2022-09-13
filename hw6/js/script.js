const utils = {
    reverse: function(source) {
        const result = []
    
        for(let i = source.length-1; i >= 0; i--) {
            result.push(source[i])
        }
    
        return console.log(result)
    },
    verifyNumbers: function(source) {

        let newArray = []

        for(let i = 0; i < source.length; i++) {
            if(typeof source[i] === 'number') {
                newArray.push(source[i])
            }
        }
                    
        return console.log(newArray)
    },
    getAverage: function(source) {

        const result = source.reduce((newArr, acc) => {
            return newArr + acc / source.length
        }, 0);
    
        return console.log(+result.toFixed(1))
    },
    getMin: function(source) {

        return console.log(source.reduce((acc, num) => {
            if(num < acc) {
                acc = num
            }
            return acc
        }, source[0]))
    },
    getMaxString: function(source) {

        return console.log(source.reduce((acc, str) => {
            if(str.length > acc.length) {
                acc = str
            }
            return acc
        }, source[0]))
    
    }
}

const reverseArr = ['hello', 1, 6, 'end']
utils.reverse(reverseArr)

const someArray = [1, 'two', 6, 5, 2, 'vladilen', true]
utils.verifyNumbers(someArray)

const averageArr = [6, 5, 9, 10, 7, 1, 12]
utils.getAverage(averageArr)

const getMinArr = [64, 88, -7, 0, 36, -11, 124]
utils.getMin(getMinArr)

const getMaxArr = ['hello', 'maxString', 'apple', 'orange', 'burger']
utils.getMaxString(getMaxArr)