<script>
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	:global(body) {
		background-color: rgb(22, 17, 18);
	}

	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>