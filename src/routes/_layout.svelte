<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>

	main {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
	content {
		display: flex;
		flex-direction: column;
		flex: 1;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>



<main>
	<Nav {segment}/>
	<content><slot></slot></content>
	
</main>