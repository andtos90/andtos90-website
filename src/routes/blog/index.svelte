<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	.comment {color: "#aaa"; font-size: 0.6em; text-align: center; font-style: italic}
</style>

<svelte:head>
	<title>Andrea Tosatto - Blog</title>
</svelte:head>

<h1>Talks</h1>

<ul>
	{#each posts as post}
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>

<p class="comment">&lt;!--TODO: remember to remember to write down the things I do--&gt;</p>