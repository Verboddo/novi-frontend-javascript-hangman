function displayWordSoFar(word, guesses) {

    // Create variable for display word
    let displayWord = ''
    // Make function word into a array
    const splitWord = word.split('')

    // Loop over the array word
    for (let i = 0; i < splitWord.length; i++) {
        // Check if guesses are matching with the array
        if (guesses.includes(splitWord[i])) {
            // If guesses match the array replace displayWord with array
            displayWord = displayWord + splitWord[i] + ' '
        } else {
            // If guesses doesn't match the array give back empty space
            displayWord += '_ '
        }
    }
    // return the display word
    return displayWord
}

// Create a function to keep track of the wrong answers
function displayWrongCount(word, guesses) {
    // Creating a counter
    let wrongCount = 0

    // Looping over the guesses
    for (let i = 0; i < guesses.length; i++) {
        // Creating a temporary guess variable
        let tempGuesses = guesses[i]

        // Checking if the guess is within the word
        if(!word.includes(tempGuesses)) {
            // If the answer is wrong add 1 to wrongCount
            wrongCount++
        }
    }
    // Returning the wrong count
    return wrongCount
}

// Creating a function to display the hangman per wrong answer
function displayHangMan(wrongCount) {
    if (wrongCount === 1) {
        console.log('|\n'   +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '===========')
    } if (wrongCount === 2) {
        console.log('' +
            '__________\n'  +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '===========')
    } if (wrongCount === 3) {
        console.log('' +
            '__________\n'  +
            '| /\n'         +
            '|/\n'          +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '===========')
    } if (wrongCount === 4) {
        console.log('' +
            '__________\n'  +
            '| /     |\n'   +
            '|/\n'          +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '===========')
    } if (wrongCount === 5) {
        console.log('' +
            '__________\n'  +
            '| /     |\n'   +
            '|/     _o_\n'  +
            '|\n'           +
            '|\n'           +
            '|\n'           +
            '===========')
    } if (wrongCount === 6) {
        console.log('' +
            '__________\n'  +
            '| /     |\n'   +
            '|/     _o_\n'  +
            '|       O\n'   +
            '|\n'           +
            '|\n'           +
            '===========')
    } if (wrongCount === 7) {
        console.log('' +
            '__________\n'  +
            '| /     |\n'   +
            '|/     _o_\n'  +
            '|       O\n'   +
            '|      / \\\n' +
            '|\n'           +
            '===========')
    }
    return wrongCount
}

function isGameWon(word, guesses) {
    // Looping over the word
    for (let i = 0; i < word.length; i++) {
        // If a letter from the word doesn't match
        // Return false else return true
        if (!guesses.includes(word[i])) {
            return false
        }
    }
    return true;
}

function isGameLost(word, guesses) {
    // Creating a wrongCount counter to keep track of the wrong guesses
    let wrongCount = 0

    // Looping over the guesses
    for (let i = 0; i < guesses.length; i++) {
        // Creating a temporary guess variable per guess
        let tempGuesses = guesses[i]
        // Checking if the guess is within the word
        if (!word.includes(tempGuesses)) {
            // If the guess is not withing the word add 1 to the counter
            wrongCount++
            // If the wrongCount reaches 7 or more return true or else false
            if (wrongCount >= 7) {
                return true
            }
        }
    }
    return false
}

// Exporting the functions
module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
    displayWrongCount: displayWrongCount,
    displayHangMan: displayHangMan,
};
