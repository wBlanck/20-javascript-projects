const quoteContainer = document.querySelector(".container");
const loaderContainer = document.querySelector(".loader-container");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".new-quote");

let apiQuote = [];

async function getQuote() {
  const apiUrl = "https://api.quotable.io/random";
  quoteContainer.style.display = "none";
  loaderContainer.style.display = "flex";

  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();

    if (apiQuote.length) {
      loaderContainer.style.display = "none";
      quoteContainer.style.display = "flex";
      quote.innerHTML = `
        <i class="fas fa-quote-left"></i>
        ${apiQuote.content}
      `;
      author.textContent = apiQuote.author;
      console.log(apiQuote);
    }
  } catch (error) {}
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();
