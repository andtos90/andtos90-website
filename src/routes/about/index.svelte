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

	p {margin-block-start: 0em; margin-block-end: 0em;}

	.show-div {
		background: #C74939;
		color: white;
		font-weight: bold;
		margin-left: auto;
		padding: 0.3em;
		margin-bottom: 0.8em;
	}

	@media (max-width: 600px) {
		.show-div { 
			width: 100%;
			margin-left: 0;
		}
	}
</style>

<svelte:head>
	<title>Andrea Tosatto - CV</title>
</svelte:head>

<a class="show-div" href="https://tosat.to/git-resume">Less boring version</a>
{@html resume.html}
