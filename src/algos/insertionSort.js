export const insertionSort = (a) => {
  let arr = [...a];
  console.log(arr);
  let swaps = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = i;
      while (j >= 1 && arr[j] < arr[j - 1]) {
        swaps.push([j - 1, j]);
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
    }
  }
  return swaps;
};
