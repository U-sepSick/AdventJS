function getCompleted(part, total) {

    part = part.split(':')
    total = total.split(':')
    console.log(part)
    console.log(total)

    partM = part[0] * 3600 + +part[1] * 60 + + part[2]
    totalM = total[0] * 3600 + +total[1] * 60 + + total[2]
    console.log(partM)
    console.log(totalM)

    const maximoComunDivisor = (a, b) => {
        let temporal;
        while (b !== 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    };

    A = maximoComunDivisor(partM, totalM)

    return (partM / A + '/' + totalM / A)
}



console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'

console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5'
