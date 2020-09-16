<script>
  import Button from "./Button.svelte";

  export let name: string;
  export let value: number;
  export let tooltip: string = "";
</script>

<style>
  .name {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
  }

  .value {
    color: rgb(187, 100, 141);
    font-family: "Noto Sans", sans-serif;
    font-size: 1.2rem;
  }

  .tooltip {
    position: absolute;
    visibility: hidden;

    background-color: #bb648d;
    color: white;
    width: 33%;

    bottom: 190px;
    padding: 3px;
    border-radius: 5px;
  }

  .tooltip {
    width: 120px;
  }

  div:hover .tooltip {
    visibility: visible;
  }
</style>

{#if tooltip != ''}
  <div>
    <span class="tooltip">{tooltip}</span>
    <p class="name">{name}</p>
    <p><span class="value">{value}</span></p>
  </div>
{:else}
  <div>
    <p class="name">{name}</p>
    <p><span class="value">{value}</span></p>
  </div>
{/if}
