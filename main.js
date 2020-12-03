let randomNumber = Math.floor(Math.random() * 100) + 1;   

    let choixJoueur = document.querySelector('.choixJoueur');
    let lastResult = document.querySelector('.lastResult');
    let lowOrHi = document.querySelector('.lowOrHi');

    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');

    let guessCount = 1;
    let resetButton;

    function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
    choixJoueur.textContent = 'Propositions précédentes : ';
    choixJoueur.style.color = "yellow";
  }
  choixJoueur.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Bravo, tu as trouvé le nombre !';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } 
    else if (guessCount === 10) {
     lastResult.textContent = '!!! PERDU !!!';
     setGameOver();

  } 
    else {
     lastResult.textContent = 'Faux !';
     lastResult.style.backgroundColor = 'red';

     if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop petit !';
      lowOrHi.style.color = "red";
     } 
     else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop grand !';
      lowOrHi.style.color = "red";
      
     }
  }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Nouvelle partie';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

  function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}