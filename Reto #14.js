/**
 * ! Camino optiomo para recorrer en el menor tiempo posible
 * ! Cada nivel ( numero) determina el tiempo que necesita para llegar hasta ahi
 * ! Solo se puede desplazar hacia abajo y en diagonal buscando el numero mas pequeño
 * 
 *        
 *         [0]
 *       /    \
 *     [0]    [1]
 *    / \     / \
 *  [0] [1] [2] [3]
 */


function getOptimalPath(path) {

  const pisos = path.length

  //solo puede seguir al siguiente array a las posiciones [0] o [1] y elegir el valor menor
  console.log(path[1])
  const result = Math.min(...path[1])

  const way = path.map((e,i,a) => {

    const res = Math.min(e)
    
    //Math.min(e[i])
    return res
  })

  return way
}

//console.log(getOptimalPath([[0], [2, 3]]))
// 2 // 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))
// 5 // 0 -> 4 -> 1

//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]))
 // 8 // 1 -> 1 -> 5 -> 1
