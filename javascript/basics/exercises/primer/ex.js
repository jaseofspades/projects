// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    const lowerCaseBookName = bookName.toLowerCase();
    const wordToNotInclude = 'great';

    if (!lowerCaseBookName.includes(wordToNotInclude)) {
        favoriteBooks.push(bookName);
    }
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
    const length = favoriteBooks.length;
    console.log(`My favorite books: ${length}`);
    
    for (let book of favoriteBooks) {
        console.log(book);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();