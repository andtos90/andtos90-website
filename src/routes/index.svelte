<style>

	.container {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

  p {
    font-size: 1.2em;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
	}

	.social-icons a {
		margin-top: 30px;
		padding: 10px;
		width: 60px;
	}
</style>

<svelte:head>
	<title>Andrea Tosatto - Software Developer</title>
</svelte:head>

<div class={`container`}>
	<h1>ANDREA TOSATTO</h1>
	<p>Software Developer</p>
	<p>Passionate about teaching</p>
	<div class={`social-icons`}>
		<a target="_blank" alt={`Github`} href="https://github.com/andtos90">
			<img src={"github.svg"} alt={`Github`} />
		</a>
		<a
			target="_blank"
			alt={`Linkedin`}
			href="https://www.linkedin.com/in/tosattoandrea/"
		>
			<img src={"linkedin.svg"} alt={`Linkedin`}/>
		</a>
		<a target="_blank" alt={`Twitter`} href="https://twitter.com/andtos90">
			<img src={"twitter.svg"} alt={`Twitter`}/>
		</a>
	</div>
</div>
