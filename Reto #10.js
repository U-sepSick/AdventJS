
/*
* comprobar q el ultimo numero es mayor q el actual y menor q el siguente
*/

function checkJump(heights) {

    // Corta desde el valor en el indice 0 hasta el valor max del array
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    console.log(left)
    console.log(heights)

    // Comprueba si el siguiente valor es mayor al anterior
    const jump = left.slice(1).every((e, i) => {
        console.log(e)
        return e >= left[i]
    })
    const land = heights.slice(1).every((e, i) => {
        console.log(e)
        return e <= heights[i]
    })

    console.log(jump)
    console.log(land)

    return (jump && land && left.length != 0 && heights.length > 1)
}


console.log(checkJump([1, 3, 8, 5, 2])) // true

console.log(checkJump([5, 8, 5, 2, 1]))

console.log(checkJump([2, 2, 2, 2]))

console.log(checkJump([1, 7, 3, 5])) // false

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2

Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/