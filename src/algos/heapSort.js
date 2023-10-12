export const heapSort = (aa) => {
  let arr = [...aa];
  let a = arr.map((element, index) => {
    return [element, index];
  });
  a.sort();
  const swaps = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j][1] == i) {
        swaps.push([i, j]);
        break;
      }
    }
  }
  return swaps;
};

// console.log(heapSort([4, 3, 2, 1]));
