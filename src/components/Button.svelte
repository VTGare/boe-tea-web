<script>
  export let name: string;
  export let href: string;
</script>

<style>
  a.button {
    background-color: rgb(187, 100, 141);
    padding: 15px 32px;
    margin: 5px;
    width: 50%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    
  }

  a.button {
    border: 3px solid rgb(187, 100, 141);
    border-radius: 15px;
  }

  a.button {
      font-size: 16px;
      color: white;
  }

  a.button {
    transition-duration: 0.4s;
  }

  a.button:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
</style>

<a {href} class="button">{name}</a>
