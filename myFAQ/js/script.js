const buttons = document.querySelectorAll('.button-open')

const p = document.querySelectorAll('.faq-comment')

function hiddenElem(tes) {
    p.forEach(elem => {
        elem.hidden = true
    })
    buttons.forEach(elem => {
        elem.innerHTML = 'Open'
    })
}

buttons.forEach(elem => {
    elem.addEventListener('click', function(e) {
        const target = e.target
        const parent = target.parentElement.parentElement
        const comment = parent.querySelector('.faq-comment')
        
        if(comment.hidden === true) {
            hiddenElem()
            target.innerHTML = 'Close'
            comment.hidden = false
        } else if(comment.hidden === false) {
            hiddenElem()
        }
    })
})