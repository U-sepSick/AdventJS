const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/
function getGiftsToRefill(a1, a2, a3) {

    const result = []

    a1.forEach(element => {
        if (!a2.includes(element) && !a3.includes(element)) {
            result.push(element)
        }
    });
    a2.forEach(element => {
        if (!a1.includes(element) && !a3.includes(element)) {
            result.push(element)
        }
    });
    a3.forEach(element => {
        if (!a2.includes(element) && !a1.includes(element)) {
            result.push(element)
        }
    });

    const a = new Set(result)
    return [...a]
}

console.log(getGiftsToRefill(a1, a2, a3)) // ['muñeca', 'pc']