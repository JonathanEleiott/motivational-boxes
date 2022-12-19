// DOM SELECTORS
const motivationalQuoteDiv = document.querySelector('div');
const enterNameButton = document.querySelector('#set-name');
const lastNameEnteredH3 = document.querySelector('h3');
const nameInput = document.getElementById('name');

// EVENT LISTENERS
motivationalQuoteDiv.addEventListener('click', () => {
  console.log('You are the best!');
});

enterNameButton.addEventListener('click', () => {
  const message = 'Last name entered is: ';
  lastNameEnteredH3.innerText = `${message} ${nameInput.value}`;
  nameInput.value = '';
});
