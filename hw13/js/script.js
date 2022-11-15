// for (let i = 0; i < test.length; i++) {
    
// }

const plus = document.querySelectorAll('div > button.plus')
const min = document.querySelectorAll('div > button.minus')

const test = document.querySelectorAll('.box')



funcTest(plus, min, test)

function funcTest(plus, min, box) {

    let first = 0
    let dd = document.querySelectorAll('div > p')

    plus.forEach(btn => {
        btn.addEventListener('click', function() {
            if(first < 3) {
                dd[0].textContent = first += 1
            }
        })
    })

    min.forEach(btn => {
        btn.addEventListener('click', function() { 
            if(first > 0) {
                dd[0].textContent = first -= 1
            }
        })
    })

    box.forEach((box, i) => {
        box.addEventListener('click', function() {
            
        })
    })
}
