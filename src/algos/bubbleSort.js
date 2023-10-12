export const bubbleSort = (a) => {
  let arr = [...a];
  console.log(arr);
  let swaps = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps.push([j + 1, j]);
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  console.log(swaps);
  return swaps;
};
