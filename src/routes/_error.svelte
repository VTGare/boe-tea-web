<script>
  export let status: string;
  export let error: any;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  video {
    border: 2px solid rgb(187, 100, 141);
    border-radius: 50%;
    max-width: 30%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    text-align: center;
  }
  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
    color: rgb(187, 100, 141);
  }

  p {
    margin: 1em auto;
    font-size: 2em;
    color: white;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Boe Tea | Error {status}</title>
</svelte:head>

<div>
  {#if status == '404'}
    <video autoplay loop muted>
      <source src="mayoi.mp4" type="video/mp4" />
      <track kind="captions" />
    </video>
  {/if}
  <h1>Error {status}</h1>
  <p>{error.message}</p>
</div>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
