function checkStepNumbers(systemNames, stepNumbers) {

  const system = {}

  for (let i = 0; i < systemNames.length; i++) {
    const current = system[systemNames[i]] || 0
    console.log(current)
    
    if(stepNumbers[1]> current){
      console.log(system[systemNames[i]] = stepNumbers[i])
    }

    /*
    if (stepNumbers[i] > current) {
      system[systemNames[i]] = stepNumbers[i]
    } else {
      return false
    }
      */
  }

  /*
  system.push({ 'systemName': systemNames[i], 'stepNumber': stepNumbers[i] })
}

system.sort((a, b) => a.stepNumber - b.stepNumber)

console.log(system)

const result = system.every((e, i, a) => {

  //a[i].systemName === a[i + 1].systemName ? true : false
  //(a[i].stepNumber < a[i + 1].stepNumber) 
  console.log()

  console.log(a[i].stepNumber)
  console.log(a[i + 1].stepNumber)
})
*/
  return true
}
const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers))