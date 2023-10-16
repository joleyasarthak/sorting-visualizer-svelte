export const heapSort = (arr) => {
  let a = arr.map((element, index) => {
    return [element, index];
  });
  let sorted = [...a];
  sorted.sort();
  let swaps = [];
  console.log(a);
  console.log(sorted);
  for (let i = 0; i < arr.length; i++) {
    if (a.toString() === sorted.toString()) break;
    for (let j = 0; j < arr.length; j++) {
      if (sorted[i][0] == a[j][0]) {
        [a[i], a[j]] = [a[j], a[i]];
        swaps.push([j, i]);
        // break;
      }
    }
  }
  return swaps;
};
// console.log(heapSort([1, 2, 4, 5, 3, 6]));
