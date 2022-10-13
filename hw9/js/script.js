let obj = {
    a: 'f',
    b: 72,
    c: 'R',
    d: {
      a: {
        a: null,
        b: 'E',
        c: {
          a: true,
          b: 'C',
          c: 'test'
        },
        d: 'U'
      },
      b: {
       a: 'R',
       b: ['S', 4, 6, 'I'],
       c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N'
    }
}

const newArray = Object.values(obj)

console.log(someAction(newArray))

function someAction(array) {

  const test1 = []

  for(let i = 0; i < array.length; i++) {

    const result = test1

    if(typeof array[i] === 'string') {

        let isUpperCase = array[i].toUpperCase()==array[i]

        if(isUpperCase) {
            result.push(array[i].toString())
        }
    } else if (array[i] !== null && typeof array[i] === 'object') {
      let newArray1 = Object.values(array[i])

      result.push(someAction(newArray1).toString())
    }
  }

return test1.join('')
}





