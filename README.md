<div align="center">
 <h1 align="center">README Jokes</h1>
 <img src="readme-jokes-cover.gif" width=80% alt="jokes GIF">
 <!---
 old gif:
 https://media.giphy.com/media/l41lISBVXb9gRT32w/giphy.gif
 ---->
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

Endpoint URL:<a href="https://readme-jokes.vercel.app/api">`https://readme-jokes.vercel.app/api`</a>

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

### Customization Guide

Customize using `?` after `/api` in the https link, example here with no borders using the `hideBorder` parameter.
<br/>

Markdown method:  
`![Jokes Card](https://readme-jokes.vercel.app/api?hideBorder)`
<br/>

Image method:  
`<img src="https://readme-jokes.vercel.app/api?hideBorder" alt="Jokes Card" />`
<br/>

Both methods will produce the following jokes card without border:
<div align="left">
<img alt="Jokes Card" src="https://readme-jokes.vercel.app/api?hideBorder">
</div>
<br/>

To use multiple parameters use `&` after the first parameter.  
e.g. `?hideBorder&theme=cobalt&qColor=%23944bcc&aColor=%23bbdb51`

This example will produce a jokes card with the next features:
- With cobalt theme
- Without border
- Answer color #944bcc
- Question color #bbdb51
<br/>

<div>
<img alt="Jokes Card" src="https://readme-jokes.vercel.app/api?hideBorder&theme=cobalt&qColor=%23944bcc&aColor=%23bbdb51">
</div>

#### Parameters Available

- **`bgColor`** → Background Color  
   Example: <a href="https://readme-jokes.vercel.app/api?&bgColor=%23944bcc">
  `https://readme-jokes.vercel.app/api?&bgColor=%23944bcc`</a>  
  (makes the color of the background purple)

- **`borderColor`** → Border Color  
  Example: <a href="https://readme-jokes.vercel.app/api?&borderColor=%23944bcc">
  `https://readme-jokes.vercel.app/api?&borderColor=%23944bcc`</a>  
  (makes the color of the border purple)

- **`qColor`** → Question Color  
  Example: <a href="https://readme-jokes.vercel.app/api?&qColor=%23944bcc">
  `https://readme-jokes.vercel.app/api?&qColor=%23944bcc`</a>  
  (makes the color of the questions purple)
  
- **`aColor`** → Answer Color  
  Example: <a href="https://readme-jokes.vercel.app/api?&aColor=%23944bcc">
  `https://readme-jokes.vercel.app/api?&aColor=%23944bcc`</a>  
  (makes the color of the answers purple)
  
- **`textColor`** → Normal text Color (does not apply to answers nor questions)  
  Example: <a href="https://readme-jokes.vercel.app/api?&textColor=%23944bcc">
  `https://readme-jokes.vercel.app/api?&textColor=%23944bcc`</a>  
  (makes the color of the normal text purple)
  
- **`codeColor`** → Code text Color  
  Example: <a href="https://readme-jokes.vercel.app/api?&codeColor=%23944bcc">
  `https://readme-jokes.vercel.app/api?&codeColor=%23944bcc`</a>  
  (makes the color of the code text purple)
  
- **`hideBorder`** → Mention as a value-less parameter to hide boder  
  Example: <a href="https://readme-jokes.vercel.app/api?hideBorder">
  `https://readme-jokes.vercel.app/api?hideBorder`</a>

- **`theme`** → Theme (Must be one from the themes list)  
  Example: <a href="https://readme-jokes.vercel.app/api?theme=gradientBlue">
  `https://readme-jokes.vercel.app/api?theme=gradientBlue`</a>  
  (applies the `gradientBlue` theme)

<details>
<summary><b>CLICK HERE TO OPEN THE THEMES LIST</b></summary>

<br/>

<table>
 <tr>
  <th>Theme Name</th>
  <th>Preview Image</th>
 </tr>
 <tr>
 <td>default</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api"></td>
 </tr>

 <tr>
 <td>gradientBlue</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=gradientBlue"></td>
 </tr>

 <tr>
 <td>solidBlue</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=solidBlue"></td>
 </tr>

 <tr>
 <td>halloween</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=halloween"></td>
 </tr>

 <tr>
 <td>watermelon</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=watermelon"></td>
 </tr>

 <tr>
 <td>pinkish</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=pinkish"></td>
 </tr>

 <tr>
 <td>daySky</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=daySky"></td>
 </tr>

 <tr>
 <td>radical</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=radical"></td>
 </tr>

 <tr>
 <td>merko</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=merko"></td>
 </tr>

 <tr>
 <td>gruvbox</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=gruvbox"></td>
 </tr>

 <tr>
 <td>tokyonight</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=tokyonight"></td>
 </tr>

 <tr>
 <td>onedark</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=onedark"></td>
 </tr>

 <tr>
 <td>cobalt</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=cobalt"></td>
 </tr>

 <tr>
 <td>synthwave</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=synthwave"></td>
 </tr>

 <tr>
 <td>dracula</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=dracula"></td>
 </tr>

 <tr>
 <td>prussian</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=prussian"></td>
 </tr>

 <tr>
 <td>monokai</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=monokai"></td>
 </tr>

 <tr>
 <td>vue</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=vue"></td>
 </tr>

 <tr>
 <td>vue-dark</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=vue-dark"></td>
 </tr>

 <tr>
 <td>nightowl</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=nightowl"></td>
 </tr>

 <tr>
 <td>buefy</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=buefy"></td>
 </tr>

 <tr>
 <td>blue-green</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=blue-green"></td>
 </tr>

 <tr>
 <td>algolia</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=algolia"></td>
 </tr>

 <tr>
 <td>darcula</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=darcula"></td>
 </tr>

 <tr>
 <td>bear</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=bear"></td>
 </tr>

 <tr>
 <td>solarized-dark</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=solarized-dark"></td>
 </tr>

 <tr>
 <td>solarized-light</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=solarized-light"></td>
 </tr>

 <tr>
 <td>gotham</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=gotham"></td>
 </tr>

 <tr>
 <td>material-palenight</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=material-palenight"></td>
 </tr>

 <tr>
 <td>graywhite</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=graywhite"></td>
 </tr>

 <tr>
 <td>ayu-mirage</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=ayu-mirage"></td>
 </tr>

 <tr>
 <td>calm</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=calm"></td>
 </tr>

 <tr>
 <td>flag-india</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=flag-india"></td>
 </tr>

 <tr>
 <td>omni</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=omni"></td>
 </tr>

 <tr>
 <td>react</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=react"></td>
 </tr>

 <tr>
 <td>blueberry</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=blueberry"></td>
 </tr>

 <tr>
 <td>random</td>
 <td style="padding-top:4px"><img src = "https://readme-jokes.vercel.app/api?theme=random"></td>
 </tr>

 </table>

</details>

<br/>

_Note: Use URL-encoded `#` for color values i.e. `%23`<br/>_
_eg: `#FFF` will be `%23FFF`<br/>_
_Note: You can also use the URL parameters to customize the themes.<br/>_
_URL eg: <https://readme-jokes.vercel.app/api?bgColor=%23073b4c&textColor=%2306d6a0&aColor=%2306d6a0&borderColor=%2306d6a0>_

### Demo

![Jokes Card](https://readme-jokes.vercel.app/api)

![Jokes Card](https://readme-jokes.vercel.app/api?bgColor=%23073b4c&textColor=%2306d6a0&aColor=%2306d6a0&borderColor=%2306d6a0)

![Jokes Card](https://readme-jokes.vercel.app/api?bgColor=%23212529&textColor=%23ffddd2&qColor=%23f94144&aColor=%2390be6d&borderColor=%23f9c74f&codeColor=%23f9c74f)

### Known Issues

- Not Mobile responsive. [#3](https://github.com/ABSphreak/readme-jokes/issues/3)

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
<p align="center">Created by <a href="https://www.abhinav.sh/">Abhinav Sharma</a> & <a href="https://github.com/ABSphreak/readme-jokes/graphs/contributors">Community</a> | Deployed on <a href="https://vercel.com/">Vercel</a></p>
