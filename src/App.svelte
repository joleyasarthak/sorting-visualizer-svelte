<script>
  import Bars from "./components/Bars.svelte";
  let n = 10;
  //this holds the reference of child exported methods Link:https://stackoverflow.com/questions/61333755/svelte-access-child-components-method
  let algo = "insertion";
  let child;
</script>

<main>
  <div class="floating">
    <input type="number" bind:value={n} />
    <br />
    <button on:click={child.sort(algo)}>Sort</button>
    <br />
    {#each ["insertion", "selection", "bubble", "merge", "heap"] as _algo}
      <input type="radio" name="algo" value={_algo} bind:group={algo} />
      <span>{_algo}</span>
      <br />
    {/each}
  </div>
  <div class="container">
    <!-- use effect jaisa hai -->
    {#key [n, algo]}
      <!-- This reloads bar component when value of n changes -->
      <!-- {#each Array(3) as it} -->
      <Bars {n} bind:this={child} />
      <!-- {/each} -->
    {/key}
  </div>
</main>

<style>
  .container {
    display: flex;
    gap: 30px;
  }
  span {
    color: white;
  }
  .floating {
    margin-top: 10px;
    margin-right: 10px;
    position: fixed;
    right: 0;
    top: 0;
    height: 10%;
  }
  button {
    padding: 5px;
    margin-top: 5px;
  }
</style>
