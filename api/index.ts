import jokes from '../lib/jokes.json';
import { CONSTANTS, getRandomArrayElement } from '../lib/utils';
import { qnaCard, quoteCard } from '../lib/renderJokesCard';
import themes from '../lib/themes.json';

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

interface Joke {
  q?: string;
  a?: string;
  form?: string;
}

interface JokesData {
  [key: string]: Joke | string;
}

// Convert jokes to the correct type
const typedJokes = jokes as JokesData;

export default function handler(req: any, res: any) {
  console.log('API route hit', req.url);
  const index = Math.floor(Math.random() * Object.keys(typedJokes).length);
  let renderJoke = '';

  // Get query parameters from URL
  const searchParams = new URL(req.url, `http://${req.headers.host}`).searchParams;
  let borderColor = searchParams.get('borderColor') ?? '';
  let qColor = searchParams.get('qColor') ?? '';
  let aColor = searchParams.get('aColor') ?? '';
  const textColor = searchParams.get('textColor') ?? '';
  let bgColor = searchParams.get('bgColor') ?? '';
  let codeColor = searchParams.get('codeColor') ?? '';
  let theme = searchParams.get('theme')?.toLowerCase() ?? '';
  const hideBorder = searchParams.has('hideBorder');

  if (theme === 'random') {
    theme = getRandomArrayElement(Object.keys(themes));
  }

  if (!themes[theme as keyof typeof themes]) {
    theme = 'default';
  }

  const colorTheme = themes[theme as keyof typeof themes];
  borderColor = borderColor || colorTheme.borderColor;
  bgColor = bgColor || colorTheme.bgColor;
  qColor = qColor || colorTheme.qColor;
  aColor = aColor || colorTheme.aColor;
  codeColor = codeColor || colorTheme.codeColor;

  const jokeData = typedJokes[index];
  if (typeof jokeData === 'object' && jokeData.q) {
    const joke = jokeData as Joke;
    const question = joke.q!;
    const answer = joke.a!;
    renderJoke = qnaCard({
      qColor: qColor || '#ffca3a',
      aColor: aColor || '#8ac926',
      bg: bgColor || '#242423',
      borderColor: borderColor || '#8ac926',
      codeColor: codeColor || '#f72585',
      question,
      answer,
      hideBorder,
    });
  } else {
    let joke = typedJokes[index] as string;

    if (joke.includes('<br')) {
      joke = typedJokes[index] as string;
    } else {
      const parts = (typedJokes[index] as string).split('?"');
      if (parts.length === 2) {
        joke = parts[0] + '?"' + '<br/><br/>' + parts[1];
      } else {
        joke = typedJokes[index] as string;
      }
    }

    renderJoke = quoteCard({
      textColor: textColor || '#ffca3a',
      bg: bgColor || '#242423',
      borderColor: borderColor || '#8ac926',
      codeColor: codeColor || '#f72585',
      qoute: joke,
      hideBorder,
    });
  }

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);
  res.status(200).send(renderJoke);
}
