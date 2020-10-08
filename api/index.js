const { clampValue, CONSTANTS } = require('../src/utils');

let jokes = require('../src/jokes.json');
// If cache times are to be set via query parameters
const cache_seconds = {};

let index = Math.floor(Math.random() * Object.keys(jokes).length + 1);
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
					border: 2px solid #8ac926;
					border-radius: 10px;
					background: #242423;
				}
				.text{
					padding: 0.5rem;
					font-family: Arial, Helvetica, sans-serif;
				}
				.question {
					color: #ffca3a;
				}
				.answer {
					color: #8ac926;
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
					border: 2px solid #fdfcdc;
					border-radius: 10px;
					background: #242423;
				}
				.text{
					padding: 0.5rem;
					font-family: Arial, Helvetica, sans-serif;
				}
				.quote {
					color: #fdfcdc;
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

const cacheSeconds = CONSTANTS.ONE_MINUTE;

module.exports = async (req, res) => {
	res.setHeader('Content-Type', 'image/svg+xml');
	res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
	res.send(renderJoke);
};
