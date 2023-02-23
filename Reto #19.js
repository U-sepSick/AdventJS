function sortToys(toys, positions) {
  const list = [];
  for (let i = 0; i < positions.length; i++) {
    list.push({ position: positions[i], toy: toys[i] });
  }

  list.sort((a, b) => a.position - b.position);

  for (let o = 0; o < list.length; o++) {
    positions[o] = list[o].position;
    toys[o] = list[o].toy;
  }

  return toys;
}

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions));

const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];

sortToys(moreToys, morePositions);