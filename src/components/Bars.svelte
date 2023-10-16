<script>
  import { flip } from "svelte/animate";
  import {
    insertionSort,
    bubbleSort,
    selectionSort,
    heapSort,
  } from "../algos/algoExports";
  export let n = 10; //init size
  let lengths;
  let success = false;
  $: lengths = [...Array(n)].map((e) => Math.floor(Math.random() * 351) + 150);
  let toSwap = []; //global state for styling
  export function sort(algo) {
    let swaps;
    if (algo == "insertion") {
      swaps = insertionSort(lengths);
    } else if (algo == "selection") {
      swaps = selectionSort(lengths);
    } else if (algo == "bubble") {
      swaps = bubbleSort(lengths);
    } else if (algo == "merge") {
      swaps = [];
    } else if (algo == "heap") {
      swaps = heapSort(lengths);
      swaps.map(([i, j]) => {
        console.log(i, j);
      });
    }
    animate(swaps);
  }
  function animate(swaps) {
    if (swaps.length == 0) {
      toSwap = [];
      success = true;
      return;
    }
    const [i, j] = swaps.shift();
    toSwap = [i, j];
    [lengths[j], lengths[i]] = [lengths[i], lengths[j]];
    setTimeout(() => {
      animate(swaps);
    }, 200);
  }
</script>

<div class="bars">
  {#each lengths as length, i (i)}
    <div
      animate:flip={{ duration: 100 }}
      class="bar"
      style="height: {length}px; 
      background-color: {toSwap[0] == i || toSwap[1] == i ? 'red' : 'white'};
      background-color: {success ? 'green' : 'white'};
      font-weight: bold;
      "
    >
      <p>{length}</p>
    </div>
  {/each}
</div>

<style>
  .bars {
    display: flex;
    align-items: flex-end;
  }
  p {
    text-align: center;
  }
  .bar {
    width: 35px;
    background-color: white;
    margin: 5px;
  }
</style>
