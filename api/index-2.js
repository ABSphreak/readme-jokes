const { clampValue, CONSTANTS } = require('../src/utils');
let jokes = require('../src/jokes.json');

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

module.exports = async (req, res) => {
  /*
		let index = Math.floor(Math.random() * Object.keys(jokes).length + 1);
	*/
  let index = Math.floor(Math.random() * Object.keys(jokes).length);
  // let index = 139;

  console.log(index);

  let renderJoke = ``;

  if (jokes[index].q) {
    let question = jokes[index].q;
    let answer = jokes[index].a;
    renderJoke = `<svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
				.container {
					border: 2px solid #72e7ff;
					border-radius: 10px;
					background: rgba(4,26,48,1);
				}
				.text{
					padding: 0.5rem;
					font-family: Arial, Helvetica, sans-serif;
				}
				.question {
					color: #2289F0;
				}
				.answer {
					color: #63B1FF;
				}
				code {
					font-size: 1.2rem;
					color: #f72585;
				}
			</style>
			<div class="container">
				<div class="text">
					<p class="question"><b>Q.</b> ${question}</p>
					<p class="answer"><b>A.</b> ${answer} </p>
				</div>
			</div>
		</div>
	</foreignObject>
</svg>`;
  } else {
    renderJoke = `<svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
		<div xmlns="http://www.w3.org/1999/xhtml">
			<style>
				.container {
					border: 2px solid #72e7ff;
					border-radius: 10px;
					background: rgba(4,26,48,1);
				}
				.text{
					padding: 0.5rem;
					font-family: Arial, Helvetica, sans-serif;
				}
				.quote {
					color: #63B1FF;
				}
				code {
					font-size: 1.2rem;
					color: #f72585;
				}
			</style>
			<div class="container">
				<div class="text">
					<p class="quote">${jokes[index]}</p>
				</div>
			</div>
		</div>
	</foreignObject>
</svg>`;
  }

  // Sets the type of content sent
  res.setHeader('Content-Type', 'image/svg+xml');
  // Set the Cache type to public (Any cache can store the data) and the max-age
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.send(renderJoke);
};
