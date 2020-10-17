// Question-Answer type card
const qnaCard = (
  qColor,
  aColor,
  bg,
  borderColor,
  codeColor,
  question,
  answer
) => {
  const card = `
  <svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .container {
            border: 2px solid ${borderColor};
            border-radius: 10px;
            background: ${bg};
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .question {
            color: ${qColor};
          }
          .answer {
            color: ${aColor};
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
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
  return card;
};

// Quotation type card
const quoteCard = (textColor, bg, borderColor, codeColor, qoute) => {
  const card = `
  <svg width="500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .container {
            border: 2px solid ${borderColor};
            border-radius: 10px;
            background: ${bg};
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .quote {
            color: ${textColor};
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <div class="text">
            <p class="quote">${qoute}</p>
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
