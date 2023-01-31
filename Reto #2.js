const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.
// 2 días -> 4 horas extra en el año

function countHours(year, holidays) {
    return holidays.map(holiday => {
        let date = new Date(`${year}/${holiday}`)
        return [1, 2, 3, 4, 5].includes(date.getDay())
    }).reduce((count, extraHour) => count + extraHour)*2
}

console.log(countHours(year, holidays))