<script>
  import { bubbleSort } from "../algos/bubbleSort";
  import { flip } from "svelte/animate";
  import { selectionSort } from "../algos/selectionSort";
  import { insertionSort } from "../algos/insertionSort";
  import { heapSort } from "../algos/heapSort";
  export let n = 10; //init size
  let lengths;
  let success = false;
  $: lengths = [...Array(n)].map((e) => Math.floor(Math.random() * 351) + 150);
  let toSwap = []; //global state for styling
  export function sort() {
    let swaps = heapSort(lengths); //change algo here
    console.log(swaps);
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
    }, 100);
  }
</script>

<div class="bars">
  {#each lengths as length, i (i)}
    <div
      animate:flip={{ duration: 50 }}
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
