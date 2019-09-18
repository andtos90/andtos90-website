const posts = [
  {
    title: "Home automation - TALK",
    slug: "domotics-talk-1",
    html: `
      <p>Talk about the home automation system I built for my home.</p>
      <p></p>Link to the <a href='https://tosat.to/ha-slides/'>slides</a></p>
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
