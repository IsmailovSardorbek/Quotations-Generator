window.onload = () => getQuote();

let quote = document.querySelector(`#quote`);
let author = document.querySelector(`#author`);
let btn = document.querySelector(`#btn`);

const API_URL = `https://api.quotable.io/random`;

function getQuote() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      quote.innerHTML = `${data.content}`;
      author.innerHTML = `${data.author}`;
    });
}

btn.addEventListener(`click`, () => getQuote());
