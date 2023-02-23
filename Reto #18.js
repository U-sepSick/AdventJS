function dryNumber(dry, numbers) {
  const arrayNum = Array.apply(null, Array(numbers)).map((_, i) => i + 1);
  const result = arrayNum.filter((v) => String(v).includes(dry));
/*
  const arrayNum = [];
  for (let i = 1; i <= numbers; i++) {
    arrayNum.push(i)
  }

  const result = arrayNum.filter((v) => String(v).includes(dry));*/

  return result;
}