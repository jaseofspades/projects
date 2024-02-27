const letters = document.querySelectorAll('.scoreboard-letter');
const loading = document.querySelector('.loading-bar');
const MAXIMUM_GUESS_LENGTH = 5;

/**
 * Typing logic
 */
async function init() {

    let currentGuess = '';
    let currentRow = 0;
    
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
        console.log('row: ', (rowToWrite / 5) + 1);

        // Add current guess word to the current row
        letters[rowToWrite + currentGuess.length - 1].innerText = letter;
    }

    /**
     * 
     * All guesses must be submitted with all 5 letters filled out.
     */
    async function commitGuess() {

        // If the current guess word is not 5 letters long, do nothing
        if (currentGuess.length !== MAXIMUM_GUESS_LENGTH) {s
            return;
        }

        // Move down to the next row and purge the current guess word
        currentRow++;
        currentGuess = '';

        // Check word against the solution
    }

    /**
     * 
     */
    function deleteLastLetter() {

    }

    // NOTE: Good idea to name callback function for debugging purposes in the future if this event fails
    document.addEventListener('keydown', function handleKeyPress (event) {

        // Retrieve the user's key input
        const action = event.key;
        console.log('action: ', action);

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

/**
 * The word of the day to guess against
 */


init();

