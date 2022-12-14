const buttons = document.querySelectorAll('.button-open')

const comments = document.querySelectorAll('.faq-comment')

function hiddenElem() {
    comments.forEach(elem => {
        elem.hidden = true
    })
    buttons.forEach(elem => {
        elem.innerHTML = 'Open'
    })
}

buttons.forEach(elem => {
    elem.addEventListener('click', function(e) {
        const target = e.target
        const parent = target.parentElement
        const preParent = parent.parentElement
        const comment = preParent.querySelector('.faq-comment')
        
        if(comment.hidden === true) {
            hiddenElem()
            target.innerHTML = 'Close'
            comment.hidden = false
        } else if(comment.hidden === false) {
            hiddenElem()
        }
    })
})


const hintElements = document.querySelectorAll('#title-wrapper')

hintElements.forEach(elem => {
    elem.addEventListener('mouseover', function(e) {
        const target = e.target
        const parent = target.parentElement
        const hintDiv = document.createElement('div')
        // const h3Width = parent.querySelector('.h3-title').offsetWidth
        hintDiv.classList.add('hint-wrapper', 'animate__animated', 'animate__fadeIn')
        // const valueCalc = 50% - h3Width
        // hintDiv.style.left = valueCalc + 'px'
        const p = document.createElement('p')
        p.innerHTML = parent.dataset.hint
        parent.prepend(hintDiv)
        hintDiv.prepend(p)
    
        
    })
    elem.addEventListener('mouseout', function(e) {
        const parent = e.target.parentElement
        const getDelete = parent.querySelector('.hint-wrapper')
        parent.removeChild(getDelete)
    })
})