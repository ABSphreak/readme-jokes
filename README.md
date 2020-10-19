<div align="center">
 <h1 align="center">README Jokes</h1>
 <img src="https://media.giphy.com/media/l41lISBVXb9gRT32w/giphy.gif" width="300" alt="jokes GIF">
 <p align="center"><i>Random programming jokes on your README.</i></p>
 <p align="center"><img alt="GitHub deployments" src="https://img.shields.io/github/deployments/ABSphreak/readme-jokes/Production?label=Production&style=flat-square"/>
 <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/ABSphreak/readme-jokes/Preview?label=Testing&style=flat-square"/>
 <a href="https://github.com/ABSphreak/readme-jokes/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/ABSphreak/readme-jokes?label=Issues&style=flat-square"/></a></p>
</div>

<div align="center">
  <a href="#demo">View Demo</a>
  ●
  <a href="https://github.com/ABSphreak/readme-jokes/issues/new">Report Bugs</a>
</div>

### Usage

Endpoint URL: `https://readme-jokes.vercel.app/api`

Embed one of these in your README:

```md
<!-- Markdown -->

![Jokes Card](https://readme-jokes.vercel.app/api)
```

<p align="center">or</p>

```html
<!-- HTML -->
<img src="https://readme-jokes.vercel.app/api" alt="Jokes Card" />
```

### Customization Parameters
- `bgColor` → **Background Color**
- `borderColor` → **Border Color**
- `qColor` → **Question Color**
- `aColor` → **Answer Color**
- `textColor` → **Normal text Color**
- `codeColor` → **Code Color**
- `theme` → **Theme (Must be one of `default, gradientBlue, solidBlue, halloween, watermelon, pinkish, daySky`)**

*Note: Use URL-encoded `#` for color values i.e. `%23`<br/>*
*eg: `#FFF` will be `%23FFF`*

### Demo

![Jokes Card](https://readme-jokes.vercel.app/api)

![Jokes Card](https://readme-jokes.vercel.app/api?bgColor=%23073b4c&textColor=%2306d6a0&aColor=%2306d6a0&borderColor=%2306d6a0)

![Jokes Card](https://readme-jokes.vercel.app/api?bgColor=%23212529&textColor=%23ffddd2&qColor=%23f94144&aColor=%2390be6d&borderColor=%23f9c74f&codeColor=%23f9c74f)

### Known Issues

- Refreshing the jokes takes about an hour due to image caching. [#2](https://github.com/ABSphreak/readme-jokes/issues/2)
- Not Mobile responsive. [#3](https://github.com/ABSphreak/readme-jokes/issues/3)
- Jokes are not randomizing on different endpoint requests. [#4](https://github.com/ABSphreak/readme-jokes/issues/4)

### Contributions

- Fork this repository.
- Deploy on your own [Vercel](https://vercel.com/) instance.
- See [issues](https://github.com/ABSphreak/readme-jokes/issues) that need help.
- Open a [PR](https://github.com/ABSphreak/readme-jokes/pulls), if you solve something.
- Got some idea? Just open an [issue](https://github.com/ABSphreak/readme-jokes/issues/new).

### References

- [Jokes](https://github.com/ABSphreak/readme-jokes/blob/master/src/jokes.json) API has been generated from [wesbos/dad-jokes](https://github.com/wesbos/dad-jokes)
- Project is inspired by [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

---

<p align="center">Feel free to ask any questions, open a PR if you feel something can be done differently!</p>
<h2 align="center">🌟Star this repository🌟</h2>
<p align="center">Created by <a href="https://www.abhinav.sh/">Abhinav Sharma</a> | Deployed on <a href="https://vercel.com/">Vercel</a></p>
