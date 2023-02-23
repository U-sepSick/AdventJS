function selectSleigh(distance, sleighs) {
  const result = sleighs
    .filter((res) => res.consumption * distance <= 20)
    .at(-1);

  return result ? result.name : null;
}