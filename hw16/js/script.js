$(document).ready(function() {
    $('.tabs-btn').each(function() {
        if(location.hash === $(this).attr('id')) {
            $('.tabs-btn.active').removeClass('active')
            $(this).addClass('active')
            showComment($(this).attr('id'))
        }
    })
})

const tabsBtn = $('.tabs-btn').each(function() {
    $(this).click(function() {
        tabsBtn.removeClass('active')
        $(this).addClass('active')
        showComment($(this).attr('id'))
        location.hash = $(this).attr('id')
    })
})

function showComment(elemId) {
    $('.tabs-comment').each(function() {
        if($(this).data('target') === elemId) {
            allCommentsHide()
            $(this).show()
        }
    })
}

function allCommentsHide() {
    $('.tabs-comment').hide()
}

// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

const comments = $('.faq-comment').hide()

const buttons = $('.button-open').each(function() {
    $(this).click(function() {
        const parent = $(this).parent()
        const preParent = parent.parent()
        const comment = preParent.find('.faq-comment')
        
        if(comment.css('display') === 'none') {
            hiddenElem(comments, buttons)
            $(this).text('Close')
            comment.show()
        } else {
            hiddenElem(comments, buttons)
        }
    })
})

function hiddenElem(comments, buttons) {
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