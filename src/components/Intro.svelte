<script>
  import Field from "./Field.svelte";
  import Button from "./Button.svelte";

  let guilds = 0;
  let channels = 0;
  let imagesCount = 0;
</script>

<style>
  video {
    border: 2px solid rgb(187, 100, 141);
    border-radius: 50%;
    max-width: 30%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    text-align: center;
    color: white;
    font-family: "Noto Sans", sans-serif;
  }
  h2 {
    text-align: center;
    color: white;
    font-family: "Open Sans", sans-serif;
  }

  .flexcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .flexcontainer.buttons {
    flex-wrap: nowrap;
    justify-content: center;
  }
</style>

<section>
  <video autoplay loop muted>
    <source src="araragi.webm" type="video/webm">
    <track kind="captions">
  </video>
  <h1>Boe Tea</h1>
  <h2>An advanced, customizable source image bot for Discord</h2>
    <div class="flexcontainer fields">
      <Field name="Servers" value={guilds} />
      <Field name="Channels" value={channels} />
      <Field name="Images posted*" value={imagesCount} tooltip="In last 24 hours on servers with enabled repost detection" />
    </div>
    <div class="flexcontainer buttons">
      <Button
        name="Invite"
        href="https://discord.com/oauth2/authorize?client_id=636468907049353216&permissions=537250880&scope=bot" />
      <Button name="Community" href="https://discord.gg/hcxuHE7" />
    </div>
</section>
