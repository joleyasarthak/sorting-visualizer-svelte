<script>
  import Bars from "./components/Bars.svelte";
  let n = 10;
  //this holds the reference of child exported methods Link:https://stackoverflow.com/questions/61333755/svelte-access-child-components-method
  let child;
</script>

<main>
  <div class="floating">
    <input type="number" bind:value={n} />
    <br />
    <button on:click={child.sort()}>Sort</button>
  </div>
  {#key n}
    <!-- This reloads bar component when value of n changes -->
    <Bars {n} bind:this={child} />
  {/key}
</main>

<style>
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
