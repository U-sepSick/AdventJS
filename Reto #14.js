/**
 * ! Camino optiomo para recorrer en el menor tiempo posible
 * ! Cada nivel ( numero) determina el tiempo que necesita para llegar hasta ahi
 * ! Solo se puede desplazar hacia abajo y en diagonal buscando el numero mas pequeño
 * 
 *        
 *          [0]
 *         /  \
 *       [0]  [1]
 *      /  \ /  \        
 *    [0]  [1]  [2]   
 * 
 * 
 */


function getOptimalPath(path) {

  // cada piso del array
  const optimalPath = path.filter((e, i, a) => {

    console.log(e)
    console.log(i)
    console.log(a)

    // cada elemento de un piso
    if (i <= 1) {
      suma = parseInt(e[0])
      console.log(suma)
    } else {
      suma = parseInt(e[0])
      console.log(suma)
    }

    console.log(e[0])

    //flat++
    return suma

  })
  return optimalPath
}

// Sumas [0][0] + [0+1][0]

//console.log(getOptimalPath([[0], [2, 3]]))
// 2 // 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))
// 5 // 0 -> 4 -> 1

//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]))
 // 8 // 1 -> 1 -> 5 -> 1
