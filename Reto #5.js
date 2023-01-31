function getMaxGifts(giftsCities, maxGifts, maxCities) {

  const newArray = []

  for (let i = 0; i < giftsCities.length; i++) {
    // Calculo ---------
    let suma = 0
    let sumaTotal = 0
    const saco = []

    for (let city of giftsCities) {

      let citySiguiente = giftsCities[giftsCities.indexOf(city) + 1]

      sumaTotal += city

      if (maxCities > 1) {

        if (sumaTotal <= maxGifts) {
          saco.push(city)
          console.log(saco)
        }
        else {
          if (saco.length + 1 <= maxCities) {
            if (citySiguiente != undefined) {
              saco.push(citySiguiente)
              console.log(saco)
            }
          }
        }
        suma = saco.reduce((x, y) => x + y)
        console.log(suma)
      }
      else {
        if (maxGifts > city) {
          suma = Math.max(city)
        }
      }
      if (suma <= maxGifts) {
        newArray.push(suma)
        console.log(newArray)
      }
    }



    // intencambiar valores del Array -------------
    giftsCities.push(giftsCities[0])
    giftsCities.shift()

    console.log(giftsCities)

  }

  // Solucion ---------------------
  const solucion = Math.max(...newArray)
  return solucion
}


console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))//20
console.log(getMaxGifts([50], 15, 1))              //0
console.log(getMaxGifts([50], 100, 1))            //50
console.log(getMaxGifts([50, 70], 100, 1))        //70
console.log(getMaxGifts([50, 70, 30], 100, 2))   //100
console.log(getMaxGifts([50, 70, 30], 100, 3))   //100
console.log(getMaxGifts([50, 70, 30], 100, 4))   //100
console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)) //100
