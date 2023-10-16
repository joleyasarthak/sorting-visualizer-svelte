export const mergeSort = (arr) => {
  let swaps = [];
  const n = arr.length;
  for (let i = 2; i <= n; i++) {
    let start = 0,
      end = i - 1;
    merge(start, end, arr, swaps);
  }
};
//slice the array and merge swaps
function merge(start, end, arr, swaps) {
  let a = [];
  let mid = (start + end) / 2 + 1;
  while (start < mid && end < arr.length) {
    if (arr[start] >= arr[end]) {
      a.push(arr[end]);
      swaps.push([a.length, end]);
      end++;
    } else {
      a.push(arr[start]);
      swaps.push([a.length, start]);
      start++;
    }
  }
  while (start < mid) {
    a.push(arr[start]);
    swaps.push([a.length, start]);
  }
  while (end < arr.length) {
    a.push(arr[end]);
    swaps.push([a.length, end]);
  }
  return a;
}

console.log(mergeSort([4, 5, 2, 6, 7, 1, 9]));
