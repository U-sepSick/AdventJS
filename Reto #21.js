function printTable(gifts) {

  let top, bot, col, row = ''
  let tabla = []

  const space = gifts.filter(s => {
    return tabla.push(s.name + s.quantity)
  })

  for (let i = 0; i <= space; i++) {
    top += '*'
  }

  /*
    for (let index = 1; index <= size; index++) {
      const space = ` `.repeat(size - index)
      const sideFace = `/\\`.repeat(index)
      const topFace = `_\\`.repeat(size).concat(`\n`)
  
      caraDeArriba += space + sideFace + topFace
    }
  */
  console.log(space)
  console.log(tabla)

  return spaceGifs
}

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])

/**
 * ! Ten en cuenta:

* ? Usa sólo el espacio que necesitas para dibujar la tabla.
* ? Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
* ? No hace falta que ordenes los resultados.
* ? La tabla no termina con salto de línea.
  
*/