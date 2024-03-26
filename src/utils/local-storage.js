function getReadBooksFromLocalStorage() {
    let items = [];
    const savedItems = localStorage.getItem('read-books')
    if (savedItems) {
        items = JSON.parse(savedItems)
    }
    return items
}

function setItemsToLocalStorage(book) {
    // here i will get an Array from localStorage;
    const books = getReadBooksFromLocalStorage();
    const exists = books.find(B => B.bookId === book.bookId)
    if (!exists) {
        books.push(book)
        alert('Added to read books list')
    } else {
        alert('This book is exists in read books list')
    }
    localStorage.setItem('read-books', JSON.stringify(books))
}

//--------------------------->>>

function getWishListBooksFromLocalStorage() {
    let items = [];
    const savedItems = localStorage.getItem('wishList-books')
    if (savedItems) {
        items = JSON.parse(savedItems)
    }
    return items
}

function setWishListBooksToLocalStorage(book) {
    // here i will get an Array from localStorage;
    const books = getWishListBooksFromLocalStorage();
    const readBooks = getReadBooksFromLocalStorage()
    const isRead = readBooks.find(b => b.bookId === book.bookId)
    if (isRead) {
        alert('You have already read this book')
        return
    }
    const exists = books.find(B => B.bookId === book.bookId)
    if (!exists) {
        books.push(book)
        alert('Added to wishlist')
    } else {
        alert('This book is exists in wishlist')
    }
    localStorage.setItem('wishList-books', JSON.stringify(books))
}

export { setItemsToLocalStorage, getReadBooksFromLocalStorage, setWishListBooksToLocalStorage, getWishListBooksFromLocalStorage }