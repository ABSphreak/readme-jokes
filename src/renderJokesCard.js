const width = '100%';
const height = '100%';

// Question-Answer type card
const qnaCard = (qColor, aColor, bg, borderColor, codeColor, question, answer, hideBorder, title) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = '2px solid transparent';
  }
  // ${console.log(window.innerHeight)}
  const card = `
  <svg class="" width="350" height="190" onload="myfunc()" id="qna" fill="none" xmlns="http://www.w3.org/2000/svg">
  <script>
        const myfunc = () => {
          let text = document.getElementsByClassName("text");
          let qnaC = document.getElementById("qna");
          if(window.screen.availWidth > 425){
            text[0].classList.add("desktop");
            qnaC.classList.add("qwidthDesktop");
          }
          else{
            text[0].classList.add("mobile");
            qnaC.classList.add("qwidthMobile");
          }
        }
  </script>
    <foreignObject width="${width}" height="${height}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .qwidthDesktop{
            width: 500px;
          }
          .qwidthMobile{
            width: 80%;
          }
          .container {
            margin: 0 0 0 1rem;
            border: ${border};
            border-radius: 10px;
            background: ${bg};
          }
          .desktop{
            font-size: 18px;
          }
          .mobile{
            font-size: 45px;
          }
          .text{
            padding: 0 0.5rem 0.5rem 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .question {
            color: ${qColor};
          }
          .answer {
            color: ${aColor};
          }
          .title {
            padding: 0 0 0 0.5rem;
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            color: #58A6FF;
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <p class="title">${title}</p>
          <div class="text">
            <p class="question"><b>Q.</b> ${question}</p>
            <p class="answer"><b>A.</b> ${answer} </p>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>`;
  return card;
};

// Quotation type card
const quoteCard = (textColor, bg, borderColor, codeColor, quote, hideBorder, title) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = '2px solid transparent';
  }
  const card = `
  <svg class="" width="350" height="190" onload="myfunc()" id="quoteC" fill="none" xmlns="http://www.w3.org/2000/svg">
  <script>
        const myfunc = () => {
          let text = document.getElementsByClassName("text");
          let quoteC = document.getElementById("quoteC");
          if(window.screen.availWidth > 425){
            text[0].classList.add("desktop");
            quoteC.classList.add("qwidthDesktop");
          }
          else{
            text[0].classList.add("mobile");
            quoteC.classList.add("qwidthMobile");
          }
          console.log(quoteC.classList, text.classList);
        }
  </script>
    <foreignObject width="${width}" height="${height}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .qwidthDesktop{
            width: 500px;
          }
          .qwidthMobile{
            width: 80%;
          }
          .container {
            margin: 0 0 0 1rem;
            border: ${border};
            border-radius: 10px;
            background: ${bg};
          }
          .desktop{
            font-size: 18px;
          }
          .mobile{
            font-size: 45px;
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .quote {
            color: ${textColor};
          }
          .title {
            padding: 0 0 0 0.5rem;
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            color: #58A6FF;
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <p class="title">${title}</p>
          <div class="text">
            <p class="quote">${quote}</p>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
  `;
  return card;
};

module.exports = {
  qnaCard,
  quoteCard,
};
