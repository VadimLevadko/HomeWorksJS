const generateArr = [1,2,[1.1, 1.2, 1.3],3]

generateList(generateArr)

function getNewArr(someArr) {
    const li = document.createElement('li')
    const newUl = document.createElement('ul')

    list.append(li)
    li.append(newUl)
    
    someArr.forEach(newElem => {
        if(Array.isArray(newElem)) {
            getNewArr(newElem)
        } else {
            let li = document.createElement('li')
            li.innerHTML = newElem
            newUl.append(li)
        }
    })
}

function generateList(array) {
    const list = document.getElementById('list')

    array.forEach(element => {

        if(Array.isArray(element)) {
            getNewArr(element)
        } else {
            let test = document.createElement('li')
            test.innerHTML = element
            list.append(test)
        }
    });
}

// -------------------------------------------------------------------------------------------------------------------------------------------------

createTable()

function createTable() {
    const table = document.getElementById('table')
    let newTr = ''

    for(let i = 0; i < 100; i++) {
        if(i % 10 === 0) {
            newTr = document.createElement('tr')
            table.append(newTr)
        } 

        let td = document.createElement('td')
        td.innerHTML = i + 1
        td.classList.add('td-border')
        newTr.append(td)
    }
}