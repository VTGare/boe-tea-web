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
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: rgba(255, 255,255, 0.8);
    color: black;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
  }

  .tooltip .tooltiptext {
    width: 20vw;
    bottom: 100%;    
    left: 50%;
    margin-left: -11vw;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.8) transparent transparent transparent;
  }

  .tooltip .tooltiptext {
    opacity: 0;
    transition: opacity 2s;
  }
  .tooltip:hover .tooltiptext {
    opacity: 1;
  }
</style>

{#if tooltip != ''}
  <div class="tooltip">
    <span class="tooltiptext">{tooltip}</span>
    <div class="arrow-down" />
    <p class="name">{name}</p>
    <p><span class="value">{value}</span></p>
  </div>
{:else}
  <div>
    <p class="name">{name}</p>
    <p><span class="value">{value}</span></p>
  </div>
{/if}
