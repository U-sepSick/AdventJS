

function checkPart(part) {

    return [...part].some((_, i, array) => {
        let word = array.filter((_, a) => a != i)
        console.log(word)
        return word.join('') === word.reverse().join('')
    });  
}

console.log(checkPart("midu")) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("uwu")) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

