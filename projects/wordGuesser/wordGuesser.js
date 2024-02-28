const letters = document.querySelectorAll('.scoreboard-letter');
const loadingBar = document.querySelector('.loading-bar');
const MAXIMUM_GUESS_LENGTH = 5;
const MAXIMUM_NUMBER_OF_ROUNDS = 5;

/**
 * Typing logic
 */
async function init() {

    let currentGuess = '';
    let currentRow = 0;
    let isLoading = true;
    let gameComplete = false;
    let guessedCorrectly = false;

    // Make API call to fetch the word of the day
    const response = await fetch("https://words.dev-apis.com/word-of-the-day?random=1");
    const responseObject = await response.json();
    const wordOfTheDay = responseObject.word.toUpperCase();
    const wordOfTheDayLetters = wordOfTheDay.split("");

    console.log(wordOfTheDay);

    // Remove the loading icon if the word is retrieved from the API call
    if (wordOfTheDay) {
        isLoading = false;
        setLoading(isLoading);
    }

    /**
     * Adds a new letter to the current guess word.
     * Replaces last letter with new letter input if at maximum guess length.
     * 
     * @param letter - Single string character
     */
    function addLetter(letter) {

        if (currentGuess.length < MAXIMUM_GUESS_LENGTH) {
            currentGuess += letter;
        } else {
            // If at maximum guess length, replace last letter with the new letter input
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }

        // Calculate the start of the new row
        rowToWrite = MAXIMUM_GUESS_LENGTH * currentRow;

        // Add new letter into the current guess words
        letters[rowToWrite + currentGuess.length - 1].innerText = letter;

        console.log(currentGuess.substring(0, currentGuess.length));
    }

    /**
     * All guesses must be submitted with all 5 letters filled out.
     */
    async function commitGuess() {

        // If the current guess word is not 5 letters long, do nothing
        if (currentGuess.length !== MAXIMUM_GUESS_LENGTH) {
            return;
        }

        // Verify whether the guess was correct, close, or wrong per letter
        const guessLetters = currentGuess.split("");
        const wordOfTheDayMap = createMap(wordOfTheDayLetters);
        console.log(wordOfTheDayMap);

        // Loop through the guess letters and mark which ones are correct
        for (let i = 0; i < MAXIMUM_GUESS_LENGTH; i++) {

            const letterRow = currentRow * MAXIMUM_GUESS_LENGTH;
            const currentLetter = letters[letterRow + i];

            // Update the current letter's tile box to the appropriate class style 
            // as defined in style.css to indicate whether the player's guess word's
            // letters are in their correct, close, or wrong places.
            
            if (guessLetters[i] === wordOfTheDayLetters[i]) {
                currentLetter.classList.add("correct");

                // Deduct the count from the solution word map that corresponds with the correctly 
                // guessed letter in the current positions
                wordOfTheDayMap[guessLetters[i]]--;
                
            } else if (wordOfTheDayLetters.includes(guessLetters[i]) && wordOfTheDayMap[guessLetters[i]] > 0) {
                // Update the current letter's position to "close" styling if there are still more
                // of the same letters, but in different positions
                currentLetter.classList.add("close");
                
            } else {
                currentLetter.classList.add("wrong");
            }
        }

        // EDGE CASE: Player guesses on the final round and should still see the win message
        // Only print lose condition on screen if player reaches final round
        // without guessing the word correctly
        if (currentGuess === wordOfTheDay) {
            alert("You win!");
            gameComplete = true;
            guessedCorrectly = true;
        } else if (currentRow === MAXIMUM_NUMBER_OF_ROUNDS && !guessedCorrectly) {
            alert(`You lose. The word of the day was ${wordOfTheDay}`);
            gameComplete = true;
        }

        // If not game over, move down to the next row and purge the current guess word
        currentRow++;
        currentGuess = '';
    }

    /**
     * Remove the last letter of the current guess word.
     */
    function deleteLastLetter() {

        // Get the current word without the last letter (i.e. currentGuess is 'HELLO', return 'HELL')
        currentGuess = currentGuess.substring(0, currentGuess.length - 1);

        // Calculate the start of the new row
        rowToWrite = MAXIMUM_GUESS_LENGTH * currentRow;

        // Replace last letter in the word with empty character (i.e. [H,E,L,L,''])
        letters[rowToWrite + currentGuess.length].innerText = '';
    }

    // NOTE: Good idea to name callback function for debugging purposes in the future if this event fails
    document.addEventListener('keydown', function handleKeyPress (event) {

        if (gameComplete || isLoading) {
            return;
        }

        // Retrieve the user's key input
        const action = event.key;

        if (action === 'Enter') {
            commitGuess();
        } else if (action === 'Backspace') {
            deleteLastLetter();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase());
        }
    });
}

/**
 * @param letter - String character
 * @returns - True if character is alphabetic, False if not
 */
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading) {
    // Find the loading icon's class list to add 'hidden' class and toggle its visibility
    // If it's loading, show it; if it's not loading, remove it.
    loadingBar.classList.toggle('hidden', !isLoading);
}

/**
 * @param array - Array of characters from a split string
 * @returns - Associative array (object), mapping characters to how many times they show up in the char array
 * 
 * ex: "POPES"
 * {
 *   'P' => 2,
 *   'O' => 1,
 *   'E' => 1,
 *   'S' => 1,
 * }
 */
function createMap(array) {
    const object = {};

    for (let i = 0; i < array.length; i++) {
        const letter = array[i];
        if (object[letter]) {
            object[letter]++;
        } else {
            object[letter] = 1;
        }
    }

    return object;
}



init();