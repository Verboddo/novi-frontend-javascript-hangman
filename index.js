// importing the readline-sync module
const { question } = require("readline-sync");
// Importing the functions from gamelogic.js file
const { displayWordSoFar, isGameWon, isGameLost, displayWrongCount, displayHangMan } = require("./gamelogic");

// Create function to start the game
function game(word, guesses) {
  // Makes sure the word is in lower case
  word = word.toLowerCase()

  // Deconstructing the displayWrongcount function
  let wrongCount = displayWrongCount(word, guesses)

  // Prints the amount of times the user gave the wrong answer
  // Prints the hangman per wrong answer
  console.log(`Je hebt keer ${displayHangMan(wrongCount)} verkeerd geraden`)

  // The guesses so far
  console.log(`Dit heb je tot nu toe geraden: , ${guesses}`);

  // The function to display the word so far
  console.log(displayWordSoFar(word, guesses))

  // Function if the game is won
  if (isGameWon(word, guesses)) {
    console.log('Gewonnen')
    return
  }

  // Function if the game is lost
  if (isGameLost(word,guesses)) {
    console.log(`Helaas verloren`)
    return;
  }

  const letter = question(`Raad een letter: `);

  // voeg de geraden letter toe aan de array met guesses
  // Make sure that only 1 letter can be the input
  if (letter.length === 1 && letter.match(/[a-z]/i)){
    // Makes sure that the letter is made to lower case
    guesses.push(letter.toLowerCase());
  } else {
    console.log('Je mag maar 1 letter invoeren, try again: ')
  }

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}


console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game(`Javascript`, []);