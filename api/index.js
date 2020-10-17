let jokes = require('../src/jokes.json');
const { CONSTANTS } = require('../src/utils');
const { qnaCard, quoteCard } = require('../src/renderJokesCard');
const theme = require('../src/themes');

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

module.exports = async (req, res) => {
  let index = Math.floor(Math.random() * Object.keys(jokes).length);
  let selectedTheme = req.query.theme;
  let renderJoke = ``;

  if (jokes[index].q) {
    let question = jokes[index].q;
    let answer = jokes[index].a;
    renderJoke = qnaCard(
      '#ffca3a',
      '#8ac926',
      'linear-gradient(26deg, rgba(4,26,48,1) 0%, rgba(33,93,142,1) 54%, rgba(0,212,255,1) 100%)',
      '#8ac926',
      '#f72585',
      question,
      answer
    );
  } else {
    renderJoke = quoteCard(
      '#ffca3a',
      'linear-gradient(26deg, rgba(4,26,48,1) 0%, rgba(33,93,142,1) 54%, rgba(0,212,255,1) 100%)',
      '#8ac926',
      '#f72585',
      jokes[index]
    );
  }

  // Sets the type of content sent
  res.setHeader('Content-Type', 'image/svg+xml');
  // Set the Cache type to public (Any cache can store the data) and the max-age
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.send(renderJoke);
};
