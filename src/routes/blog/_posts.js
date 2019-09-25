const posts = [
  {
    title: "Home automation - 17/06/2019 @ Programmers in Padua",
    slug: "domotics-talk-1",
    html: `
      <p> <b>Domotics - Open Source is better</b></br>
      Is a smart home feasible for you? Is it something you may need? Can you still have your privacy?</br> 
      I’ll try to answer those question with my experience on building my own smart home with particular attention to maintainability, interoperability and, of course, costs.</p>
      <p>Links: <a href='https://tosat.to/ha-slides/'>Slides</a> - <a href='https://youtu.be/uj3HA8zpAR0'>Video 🇮🇹</a></p>
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
