let jokes = require('../src/jokes.json');
const { CONSTANTS } = require('../src/utils');
const { qnaCard, quoteCard } = require('../src/renderJokesCard');
const themes = require('../src/themes');

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

module.exports = async (req, res) => {
  let index = Math.floor(Math.random() * Object.keys(jokes).length);
  let {
    borderColor,
    qColor,
    aColor,
    textColor,
    bgColor,
    codeColor,
    theme,
  } = req.query;
  let renderJoke = ``;

  if(theme) {
    if(!themes[theme]) theme = 'default';
    let {
      borderColor,
      bg,
      qColor,
      aColor,
      quoteColor,
      codeColor,
    } = themes[theme];
  }

  if (jokes[index].q) {
    let question = jokes[index].q;
    let answer = jokes[index].a;
    renderJoke = qnaCard(
      qColor ? qColor : '#ffca3a',
      aColor ? aColor : '#8ac926',
      bgColor ? bgColor : '#242423',
      borderColor ? borderColor : '#8ac926',
      codeColor ? codeColor : '#f72585',
      question,
      answer
    );
  } else {
    renderJoke = quoteCard(
      textColor ? textColor : '#ffca3a',
      bgColor ? bgColor : '#242423',
      borderColor ? borderColor : '#8ac926',
      codeColor ? codeColor : '#f72585',
      jokes[index]
    );
  }

  // Sets the type of content sent
  res.setHeader('Content-Type', 'image/svg+xml');
  // Set the Cache type to public (Any cache can store the data) and the max-age
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.send(renderJoke);
};
