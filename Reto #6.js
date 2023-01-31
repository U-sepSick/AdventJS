function createCube(size) {

    let caraDeArriba =''
    let caraDeAbajo=''
    let ArrayDeAbajo= []

    for (let index = 1; index <= size; index++) {
        const space = ` `.repeat(size - index)
        const sideFace = `/\\`.repeat(index)
        const topFace = `_\\`.repeat(size).concat(`\n`)

        caraDeArriba += space + sideFace + topFace
    }

    for (let index = 0; index <= size -1 ; index++) {
        const space = ` `.repeat(index)
        const sideFace = `\\/`.repeat(size - index)
        const topFace = `_/`.repeat(size).concat(`\n`)

        caraDeAbajo += space + sideFace + topFace
    }

    return caraDeArriba + caraDeAbajo.slice(0,-1)
}

console.group(createCube(3))