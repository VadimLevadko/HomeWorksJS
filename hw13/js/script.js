const boxes = document.querySelectorAll('.box')

const numArr = []
for(let i = 0; i < boxes.length; i++) {
    numArr.push(0)
}

boxes.forEach((box, i) => {
    box.addEventListener('click', function() {
        let p = box.querySelector('p')
        let boxTarget = event.target
        getResult(boxTarget, i, p)
    })
})

function getResult(target, i, p) {
    if(target.dataset.type === "plus") {
        p.textContent = numArr[i] += 1
    } else if(target.dataset.type === "minus") {
        p.textContent = numArr[i] -= 1
    }
}





// const $numbers = document.querySelectorAll('#number .operator');
// $numbers.forEach(operator => {
//     operator.addEventListener('click', function () {
//         const $thisParent = this.parentElement;
//         let numVal = +($thisParent.querySelector('.number').innerHTML);
//         if (this.classList.contains('plus')) {
//             numVal++;
//         } else if (this.classList.contains('minus')) {
//             numVal--;
//         }
//         $thisParent.querySelector('.number').innerHTML = numVal;
//     });
// });


// --------------------------------------------------------------------------------------------------------------------

const parent = document.getElementById('boxes')
const colors = document.querySelectorAll('#boxes .color-box')

colors.forEach(elem =>{
    elem.addEventListener('click', function() {
        const thisElement = this
        const thisBg = thisElement.style.backgroundColor
        switch(thisBg) {
            case '':
                thisElement.style.backgroundColor = 'green'
                break;
            case 'green':
                thisElement.style.backgroundColor = 'blue'
                break;
            case 'blue':
                thisElement.style.backgroundColor = 'yellow'
                break;
            default:
                thisElement.style.backgroundColor = ''
        }
        parent.appendChild(thisElement);
    })
})
