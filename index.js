const motivationalQuotes = [
  `Whatever you do, always give 100%. Unless you're donating blood.`, 
  `If you think you are too small to be effective, you have never been in the dark with a mosquito.`,
  `My therapist told me the way to achieve true inner peace is to finish what I start. So far I've finished two bags of M&Ms and a chocolate cake. I feel better already.`
]

// DOM SELECTORS
const motivationalQuoteDiv = document.querySelector('div');
const enterNameButton = document.querySelector('#set-name');
const lastNameEnteredH3 = document.querySelector('h3');
const nameInput = document.getElementById('name');
const getQuoteButton = document.querySelector('#get-quote');
const quoteNumberInput = document.querySelector('#quote-number');

// EVENT LISTENERS
motivationalQuoteDiv.addEventListener('click', () => {
  console.log('You are the best!');
});

enterNameButton.addEventListener('click', () => {
  const message = 'Last name entered is: ';
  lastNameEnteredH3.innerText = `${message} ${nameInput.value}`;
  nameInput.value = '';
});

getQuoteButton.addEventListener('click', () => {
  if(motivationalQuoteDiv.innerText === '') {
    motivationalQuoteDiv.innerText = motivationalQuotes[quoteNumberInput.value - 1];
  }
});

