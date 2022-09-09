function Student(name, surname, bday) {
    return {
        name,
        surname,
        bday,
        getAge: function() {
            const todayDate = new Date()

            return todayDate.getFullYear() - this.bday
        },
        presents: [],
        present: function() {
            for(let i = 0; i < 30; i++) {
                if(this.presents[i] === undefined) {
                    return this.presents[i] = true
                }
            }
        },
        absent: function() {
            for(let i = 0; i < 30; i++) {
                if(this.presents[i] === undefined) {
                    return this.presents[i] = false
                }
            }
        },
        marks: [],
        mark: function() {
            for(let g = 0; g < 5; g++) {
                let reportMark = +prompt(`День: ${g}, ${this.name} ${this.surname} какую оценку получил? (0-10)`)

                while(!Boolean(reportMark) || 0 >= reportMark || reportMark > 10) {
                    reportMark = +prompt('Возможно вы не ввели число или ввели число меньше 0 или больше 10.')
                }

                if(this.marks[g] === undefined) {
                    this.marks[g] = reportMark
                }
            }
            return this.marks
        },
        summary: function() {
            let result = this.marks.reduce((acc, num) => {
                return acc + num / this.marks.length
            }, 0);
            
            return +result.toFixed(1)
        }
    }
}


const Oleg = new Student('Oleg', 'Petrov', 1995)

console.log(Oleg)




