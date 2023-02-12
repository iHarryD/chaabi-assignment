export function shuffleArray<T>(arr: T[], length: number = arr.length) {
  const combination: typeof arr = [];
  const randomIndexes = [];
  while (randomIndexes.length !== length - 1) {
    let number = Math.floor(Math.random() * length);
    if (randomIndexes.indexOf(number) === -1) {
      randomIndexes.push(number);
    }
  }
  for (let i = 0; i < randomIndexes.length; i++) {
    combination.push(arr[randomIndexes[i]]);
  }
  return combination;
}
