<div align="center">
 <img src="readme-jokes.png" alt="Logo png" style="border-radius:6px">
 <img src="readme-jokes-cover.gif" width=80% alt="jokes GIF">
 <!---
 old gif:
 https://media.giphy.com/media/l41lISBVXb9gRT32w/giphy.gif
 ---->
 <p align="center"><img alt="GitHub deployments" src="https://img.shields.io/github/deployments/ABSphreak/readme-jokes/Production?label=Production&style=flat-square"/>
 <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/ABSphreak/readme-jokes/Preview?label=Testing&style=flat-square"/>
 <a href="https://github.com/ABSphreak/readme-jokes/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/ABSphreak/readme-jokes?label=Issues&style=flat-square"/></a></p>
</div>

<div align="center">
  <a href="#💻 Demo">View Demo</a>
  ●
  <a href="https://github.com/ABSphreak/readme-jokes/issues/new">Report Bugs</a>
</div>

## 💻 Demo

![Jokes Card](https://readme-jokes.vercel.app/api)

![Jokes Card](https://readme-jokes.vercel.app/api?bgColor=%23073b4c&textColor=%2306d6a0&aColor=%2306d6a0&borderColor=%2306d6a0)

![Jokes Card](https://readme-jokes.vercel.app/api?bgColor=%23212529&textColor=%23ffddd2&qColor=%23f94144&aColor=%2390be6d&borderColor=%23f9c74f&codeColor=%23f9c74f)

## 🛠️ Usage

Endpoint URL:<a href="https://readme-jokes.vercel.app/api"> `https://readme-jokes.vercel.app/api`</a>

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

## 🖌️ Customization Guide

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
For example:<a href="https://readme-jokes.vercel.app/api?hideBorder&theme=cobalt&qColor=%23944bcc&aColor=%23bbdb51">  
`https://readme-jokes.vercel.app/api?hideBorder&theme=cobalt&qColor=%23944bcc&aColor=%23bbdb51`
</a>

This will generate a jokes card with the next features:
- Without border
- `cobalt` theme
- Answer color `#944bcc` ( `%23944bcc` )
- Question color `#bbdb51` ( `%23bbdb51` )
<br/>

<div>
<img alt="Jokes Card" src="https://readme-jokes.vercel.app/api?hideBorder&theme=cobalt&qColor=%23944bcc&aColor=%23bbdb51">
</div>

### ⚙️ Parameters Available

**NOTE:** You need to use URL-encoded `#` for color values (`%23`)  

❌`#FFFF00` → ✔️`%23FFFF00`

- **`bgColor`** → Background Color  
   Example: <a href="https://readme-jokes.vercel.app/api?bgColor=%23ff00ff">
  `https://readme-jokes.vercel.app/api?bgColor=%23ff00ff`</a>  
  (sets the color of the background to #ff00ff)

- **`borderColor`** → Border Color  
  Example: <a href="https://readme-jokes.vercel.app/api?borderColor=%23ff2200">
  `https://readme-jokes.vercel.app/api?borderColor=%23ff2200`</a>  
  (sets the color of the border to #ff2200)

- **`qColor`** → Question Text Color  
  Example: <a href="https://readme-jokes.vercel.app/api?qColor=%23949494">
  `https://readme-jokes.vercel.app/api?qColor=%23949494`</a>  
  (sets the color of the question text to #949494)
  
- **`aColor`** → Answer Text Color  
  Example: <a href="https://readme-jokes.vercel.app/api?aColor=%2300ff00">
  `https://readme-jokes.vercel.app/api?aColor=%2300ff00`</a>  
  (sets the color of the answer text to #00ff00)
  
- **`textColor`** → Normal Text Color  
(does not apply to answer nor question text)  
  Example: <a href="https://readme-jokes.vercel.app/api?textColor=%23ff0a0a">
  `https://readme-jokes.vercel.app/api?textColor=%23ff0a0a`</a>  
  (sets the color of the normal text to #ff0a0a)
  
- **`codeColor`** → Code Text Color  
  Example: <a href="https://readme-jokes.vercel.app/api?codeColor=%2300ffff">
  `https://readme-jokes.vercel.app/api?codeColor=%2300ffff`</a>  
  (sets the color of the code text to #00ffff)
  
- **`hideBorder`** → Mention as a value-less parameter to hide boder  
  Example: <a href="https://readme-jokes.vercel.app/api?hideBorder">
  `https://readme-jokes.vercel.app/api?hideBorder`</a>

- **`theme`** → Theme (Must be one from the themes list)  
  Example: <a href="https://readme-jokes.vercel.app/api?theme=gradientBlue">
  `https://readme-jokes.vercel.app/api?theme=gradientBlue`</a>  
  (applies the `gradientBlue` theme)

<details>
<summary><b> 📝 CLICK HERE TO OPEN THE THEMES LIST</b></summary>

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

## ⚠️ Known Issues

- Not Mobile responsive. [#3](https://github.com/ABSphreak/readme-jokes/issues/3)

## 📝 Contributions

- Fork this repository.
- Deploy on your own [Vercel](https://vercel.com/) instance.
- See [issues](https://github.com/ABSphreak/readme-jokes/issues) that need help.
- Open a [PR](https://github.com/ABSphreak/readme-jokes/pulls), if you solve something.
- Got some idea? Just open an [issue](https://github.com/ABSphreak/readme-jokes/issues/new).

## 📖 References

- [Jokes](https://github.com/ABSphreak/readme-jokes/blob/master/src/jokes.json) API has been generated from [wesbos/dad-jokes](https://github.com/wesbos/dad-jokes)
- Project is inspired by [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

---

<p align="center">Feel free to ask any questions, open a PR if you feel something can be done differently!</p>
<h2 align="center">🌟Star this repository🌟</h2>
<p align="center">Created by <a href="https://www.abhinav.sh/">Abhinav Sharma</a> & <a href="https://github.com/ABSphreak/readme-jokes/graphs/contributors">Community</a> | Deployed on <a href="https://vercel.com/">Vercel</a></p>
