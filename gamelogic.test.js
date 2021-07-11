// Import functions from gamelogic.js
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

// Create a test function
test("displayWordSoFar should display an underscore followed by a space for each letter to guess", () => {
  // ARRANGE

  //Create a test variable named word
  const word = "javascript";
  //Create an empty array to save guesses
  const guesses = [];

  // ACT
  // Create variable from a function
  const displayedWord = displayWordSoFar(word, guesses);

  // ASSERT
  // What to expect the function to be
  expect(displayedWord).toBe("_ _ _ _ _ _ _ _ _ _ ");
});

// Create a test function
test("displayWordSoFar should display the letters guessed so far", () => {
  // ARRANGE
  //Create a test variable named word
  const word = "javascript";
  // Create an array with the guesses so far
  const guesses = ["a", "t", "i", "b", "k"];

  // ACT
  // Create variable from a function
  const displayedWord = displayWordSoFar(word, guesses);

  // ASSERT
  // What to expect the function to be
  expect(displayedWord).toBe("_ a _ a _ _ _ i _ t ");
});

// Create a test function
test("isGameWon should return false when all letters have not been guessed yet", () => {
  // ARRANGE
  //Create a test variable named word
  const word = "javascript";
  // Create empty array to save guessed letters in
  const guesses = [];

  // ACT
  // Create variable from a function
  const gameWon = isGameWon(word, guesses);

  // ASSERT
  // What to expect the function to be
  expect(gameWon).toBe(false);
});

// Create a test function
test("isGameWon should return true when all letters have been guessed", () => {
  // ARRANGE
  //Create a test variable named word
  const word = "javascript";
  // Create array if all guesses are correct
  const guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"];

  // ACT
  // Create variable from a function
  const gameWon = isGameWon(word, guesses);

  // ASSERT
  // What to expect the function to be
  expect(gameWon).toBe(true);
});

// Create a test function
test("isGameLost should return true if you've guessed 7 wrong letters or more", () => {
  // ARRANGE
  //Create a test variable named word
  const word = "javascript";
  // Create array with wrong guesses
  const guesses = ["q", "w", "e", "y", "u", "o", "d"];

  // ACT
  // Create variable from a function
  const gameLost = isGameLost(word, guesses);

  // ASSERT
  // What to expect the function to be
  expect(gameLost).toBe(true);
});

// Create a test function
test("isGameLost should return false if you've guessed less than 7 wrong letters", () => {
  // ARRANGE
  //Create a test variable named word
  const word = "javascript";
  // Create array with wrong guesses
  const guesses = ["q", "w", "e", "a", "t"];

  // ACT
  // Create variable from a function
  const gameLost = isGameLost(word, guesses);

  // ASSERT
  // What to expect the function to be
  expect(gameLost).toBe(false);
});
