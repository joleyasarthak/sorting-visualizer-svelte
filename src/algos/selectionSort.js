export const selectionSort = (a) => {
  let arr = [...a];
  console.log(arr);
  let swaps = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swaps.push([i, j]);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(swaps);
  return swaps;
};
