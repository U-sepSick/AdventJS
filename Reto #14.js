/**
 * ! Camino optimo para recorrer en el menor tiempo posible
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


function getOptimalPath2(path) {

  let suma_1 = 0;
  let result = 0;

  // cada piso del array
  path.filter((e, i, a) => {

    // cada elemento de un piso
    /*result += a[i][0]
    console.log(result)

    if (i > 0) {
      suma_1 += a[i][i]
      console.log(suma_1)
      result = Math.min(result, suma_1)
      console.log(result)
    }*/

    console.log(i)
    console.log(e)

    console.log(a[0][0], a[1][0], a[2][0], a[3][0])
    console.log(a[0][0], a[1][0], a[2][0], a[3][1])
    console.log(a[0][0], a[1][0], a[2][1], a[3][1])
    console.log(a[0][0], a[1][0], a[2][1], a[3][2])
    console.log(a[0][0], a[1][1], a[2][1], a[3][2])
    console.log(a[0][0], a[1][1], a[2][2], a[3][2])
    console.log(a[0][0], a[1][1], a[2][2], a[3][3])

    result = a[0][0]

    if (i < e[i].length) {
      result += a[i][i]
    }

    console.log(result)

  })

  return result
}

function getOptimalPath(path) {
  const res = path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1])
    })
  })
  return res[0]
}

// Sumas [0][0] + [0+1][0]

//console.log(getOptimalPath([[0], [2, 3]]))
// 2 // 0 -> 2

//console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))
// 5 // 0 -> 4 -> 1

console.log(getOptimalPath([
  [1],
  [1, 5],
  [7, 5, 8],
  [9, 4, 1, 3]]
))
 // 8 // 1 -> 1 -> 5 -> 1
