/*
    * Ordenar las cajas de menor a mayor
    * comprobar si cada propiedad del objecto caja es menor
*/

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
  { l: 4, w: 10, h: 5 }
]

function fitsInOneBox(boxes) {
  const sorted = [...boxes].sort((a, b) => a.l - b.l)

  for (let index in sorted) {

    const a = sorted[index]
    const b = sorted[Number(index) + 1]

    if (!a || !b) continue

    if (a.l >= b.l || a.w >= b.w || a.h >= b.h) {
      return false
    }
  }
  return true
}

console.log(fitsInOneBox(boxes))