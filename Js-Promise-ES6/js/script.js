// =================================================== ES6 ====================================================================================

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }

}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.width + 'px'
        this.$el.style.background = options.background
    }
    set width(newWidth) {
        console.error('Error:', 'Test Error')
    }
}
const box1 = new Box({
    selector: '#box1',
    width: 100,
    background: 'red'
})
const box2 = new Box({
    selector: '#box2',
    width: 150,
    background: 'lightblue'
})


class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = options.border
    }
}
const circle = new Circle({
    selector: '#circle',
    width: 80,
    background: 'green',
    border: '50%'
})

// ================================================= Promise ==================================================================================

const pushupsTime = 500
const squatsTime = 200

// Функция принимает количество приседаний/отжиманий и возвращает промис. Делаем проверку, после того как прошёл таймаут даем понять что все выполнено.
function pushups(count) {
    return new Promise((resolve, reject) => {
        if(count > 100) {
            reject(new Error('Устал, слишком много отжиманий...'))
        }

        setTimeout(() => {
            resolve()
        }, count * pushupsTime)
    })
}
function squats(count) {
    return new Promise((resolve, reject) => {
        if(count > 500) {
            reject(new Error('Устал, слишком много приседаний...'))
        }

        setTimeout(() => {
            resolve()
        }, count * squatsTime)
    })
}

// пишем в начале "async" что бы сделать async function, используем try потому что без него не использовать catch (ловим ошибку). Дальше ждем когда получим resolve от другой функции 
async function myTraining() {
    try {
        console.log('Начать тренеровку!')

        await pushups(10)
        console.log('Выполнил отжимания')

        await squats(20)
        console.log('Выполнил приседания!')
        return true
    } 
    catch(err) {
        console.log(err.toString())
        return false
    }

    // console.log('Начать тренеровку!')
    // pushups(10).then(() => {
    //     console.log('Выполнил отжимания')
    //     return squats(20000)
    // }).then(() => {
    //     console.log('Выполнил приседания!')
    // })
    // .catch((err) => {
    //     console.log(err.toString())
    // })
}

// Асинхронная функция всегда возвращает промис.
myTraining().then((result) => {
    console.log(result)
})
