<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`about.json`).then(r => r.json()).then(resume => {
			return { resume };
		});
	}
</script>

<script>
	export let resume;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Andrea Tosatto - CV</title>
</svelte:head>

<ul>
	{@html resume.html}
</ul>