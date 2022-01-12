let apiQuote = [];

async function getQuote() {
  const apiUrl = "https://api.quotable.io/random";

  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
  } catch (error) {}
}
getQuote();
console.log(apiQuote);
