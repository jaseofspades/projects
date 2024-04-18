class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	
	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
	
}

function loadBooks(bookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function newBooks(books) {
		for (let book of books) {
			bookshelf.addFavoriteBook(book);
		}

		bookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

let shelf = new Bookshelf();
loadBooks(shelf);

// shelf.printFavoriteBooks();

// ***********************

/**
 * NOTE: AJAX calls are a way for the web browser to send requests
 *       back to the server
 */
// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
