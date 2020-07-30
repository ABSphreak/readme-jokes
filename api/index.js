const jokes = require("../src/jokes.json");

let index = Math.floor(Math.random() * 6 + 1);

let question = jokes[index].question;
let answer = jokes[index].answer;

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");

  res.send(`<svg width="495" height="120" viewBox="0 0 495 120" fill="none" xmlns="http://www.w3.org/2000/svg">
	<style>
	.text { font: 600 16px  monospace; fill: #2F80ED }
	.question { font: monospace; fill: #fca311 }
	.answer { fill: #02c39a }
	</style>
	<rect x="0.5" y="0.5" width="494" height="99%" rx="4.5" fill="#5f0f40" stroke="#fb8b24"/>
	<text x="25" y="35" class="text">
		<tspan x="25" dy="18" class="question">Q. ${question}</tspan>
		<tspan x="25" dy="18" class="answer">A. ${answer}</tspan>
	</text>
	</svg>
`);
};
