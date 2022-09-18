const jokes = require('../src/jokes.json');
const { CONSTANTS, getRandomArrayElement } = require('../src/utils');
const { qnaCard, quoteCard } = require('../src/renderJokesCard');
const themes = require('../src/themes.json');

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

module.exports = async (req, res) => {
  const index = Math.floor(Math.random() * Object.keys(jokes).length);
  //const index = 168
  let renderJoke = '';

  let {
    borderColor, qColor, aColor, textColor, bgColor, codeColor, quoteColor, theme, hideBorder, title
  } = req.query;

  theme = theme ? theme.toLowerCase() : theme;

  if (theme === 'random') theme = getRandomArrayElement(Object.keys(themes));

  if (!themes[theme]) theme = 'default';
  const colorTheme = themes[theme];
  borderColor = borderColor || colorTheme.borderColor;
  bgColor = bgColor || colorTheme.bgColor;
  qColor = qColor || colorTheme.qColor;
  aColor = aColor || colorTheme.aColor;
  quoteColor = quoteColor || colorTheme.quoteColor;
  codeColor = codeColor || colorTheme.codeColor;

  if (jokes[index].q) {
    const question = jokes[index].q;
    const answer = jokes[index].a;
    renderJoke = qnaCard(
      qColor || '#ffca3a',
      aColor || '#8ac926',
      bgColor || '#242423',
      borderColor || '#8ac926',
      codeColor || '#f72585',
      question,
      answer,
      hideBorder,
      title,
    );
  } else {
    let joke = jokes[index]; 
    
    if (joke.includes("<br")) joke = jokes[index]
    else {
      joke = jokes[index].split('?"');
      if (joke.length===2) joke = joke[0] + '?"' + "<br/><br/>" + joke[1];
      else joke = jokes[index];
    }

    renderJoke = quoteCard(
      textColor || '#ffca3a',
      bgColor || '#242423',
      borderColor || '#8ac926',
      codeColor || '#f72585',
      joke,
      hideBorder,
      title,
    );
  }

  // Sets the type of content sent
  res.setHeader('Content-Type', 'image/svg+xml');
  // Set the Cache type to public (Any cache can store the data) and the max-age
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.send(renderJoke);
};
