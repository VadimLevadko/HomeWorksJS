const p = document.querySelector('#p')

const span = document.createElement('span')

p.onmouseover = function(event) {
    const parentElem = event.target.parentElement
    span.innerHTML = p.dataset.title
    parentElem.append(span)
}
p.onmouseout = function(event) {
    const parentElem = event.target.parentElement
    parentElem.removeChild(span)
}

// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------


const parent = document.querySelector('.wrapper')

parent.addEventListener('click', function(e) {
    const hide = document.querySelector('#hide')
    someFn(e.target, hide)
})

function someFn(e, hideElem) {
    if(e.dataset.click === 'click' && hideElem.hidden === true) {
        hideElem.hidden = !hideElem.hidden
    } else if(e.dataset.click === 'click' && hideElem.hidden === false) {
        hideElem.hidden = !hideElem.hidden
    }
}