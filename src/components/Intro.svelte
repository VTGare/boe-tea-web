<script>
  import { onMount, onDestroy } from "svelte";
  import { stats, BotStats } from "../stores";
  import Field from "./Field.svelte";
  import Button from "./Button.svelte";

  let guilds = 0;
  let channels = 0;
  let imagesCount = 0;

  onMount(() => {
    const ws = new WebSocket("wss://boe-tea-go.herokuapp.com/ws/stats");
    stats.subscribe((s) => {
      guilds = s.guilds;
      channels = s.channels;
      imagesCount = s.postCount;
    });

    ws.onmessage = (event) => {
      console.log("Websocket message received:", event);
      const data = JSON.parse(event.data);
      stats.set(new BotStats(data.guilds as number, data.channels as number, data.post_count as number));
    };

    ws.onerror = (event) => {
      console.error("WebSocket error:", event);
    };
  });
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
  <video autoplay loop>
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
