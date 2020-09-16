<script lang="ts">
  export let segment: string;
  let active = false;
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  nav {
    border-bottom: 2px solid rgb(187, 100, 141);;
    font-weight: 300;
    padding: 0 1em;
    background: rgb(60, 44, 51);
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logo img {
    order: 0;
    width: 5rem;

    border: 2px solid rgb(187, 100, 141);
    border-radius: 50px;
  }

  .item {
    font-family: 'Noto Sans', sans-serif;
    order: 3;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: none;
  }

  .item:hover a {
    color: rgb(187, 100, 141);
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    list-style: none;
    list-style-type: none;
  }

  .menu li a {
    display: block;
    padding: 5px 5px;
  }

  .menu li button {
    color: white;
    background: rgb(60, 44, 51);
    text-decoration: none;
    display: block;
    padding: 15px 5px;
    text-decoration: none;
    border: none;
  }

  .menu li button:focus {
    outline: rgb(60, 44, 51);
  }

  .toggle {
    order: 1;
    font-size: 20px;
  }

  .item.active {
    display: block;
  }

  @media all and (min-width: 700px) {
  .menu {
    justify-content: center;
  }
  .logo {
    flex: 1;
  }
  .toggle {
    text-align: right;
    order: 2;
  }
  /* Button up from tablet screen */
  .menu li.button a {
    padding: 10px 15px;
    margin: 5px 0;
  }
}

  @media all and (min-width: 960px) {
    .menu {
        align-items: center;     
        flex-wrap: nowrap;
        background: none;
    }
    .logo {
        order: 0;
    }
    .item {
        order: 1;
        position: relative;
        display: block; 
        width: auto;
    }

    .toggle {
        display: none;
    }

}
</style>

<nav>
  <ul class="menu">
    <li class="logo">
      <a href="/"><img src="logoColoured.png" alt="Boe Tea logo" /></a>
    </li>
    <li class="{active ? "item active" : "item"}"><a href="/status">Status</a></li>
    <li class="{active ? "item active" : "item"}"><a href="/faq">FAQ</a></li>
    <li class="{active ? "item active" : "item"}"><a href="/documentation">Docs</a></li>
    <li class="{active ? "item active" : "item"}"><a href="https://discord.com/oauth2/authorize?client_id=636468907049353216&permissions=537250880&scope=bot">Invite</a></li>
    <li class="{active ? "item active" : "item"}"><a href="https://discord.gg/hcxuHE7">Community</a></li>
    <li class="toggle"><button on:click="{() => active = !active}"><i class={active ? "fa fa-times" : "fa fa-bars"} /></button></li>
  </ul>
</nav>
