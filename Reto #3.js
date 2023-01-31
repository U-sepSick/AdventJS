
/*
    * Cada reno puede cargar dos veces el número de letras en su nombre.
    * Cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo
    * Santa Claus puede llevar un peso limitado
*/

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {

    // Peso del los paquetes
    const weight = packOfGifts.join('').length
    const capacity = reindeers.join('').length * 2
    const CanDeliver = Math.floor(capacity / weight)

    return CanDeliver
}

console.log(distributeGifts(packOfGifts, reindeers)) // 2