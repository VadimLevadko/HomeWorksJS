const comments = $('.faq-comment').hide()

$(document).ready(function() {
    $('.faq-item').each(function() {
        if(location.hash === $(this).attr('id')) {
            $(this).children('.faq-comment').show()
            $(this).find('.button-open').text('Close')
        }
    })
})

const buttons = $('.button-open').each(function(i) {
    $(this).click(function() {
        const parent = $(this).parent()
        const preParent = parent.parent()
        const comment = preParent.find('.faq-comment')
        
        if(comment.css('display') === 'none') {
            hiddenElem()
            location.hash = preParent.attr('id')
            $(this).text('Close')
            comment.show()
        } else {
            hiddenElem()
        }
    })
})

function hiddenElem() {
    comments.hide()
    buttons.text('Open')
}


$('.title-wrapper').each(function(i) {
    $(this).mouseenter(function() {
        const hintDiv = $('<div>').addClass('hint-wrapper animate__animated animate__fadeIn')
        const p = $('<p>').text($(this).data('hint'))
        $(this).append(hintDiv)
        hintDiv.append(p)
    })
    $(this).mouseleave(function() {
        $(this).find('.hint-wrapper').remove()
    })
})