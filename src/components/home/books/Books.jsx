import React from 'react';
import BookCard from './BookCard';

const Books = ({ books }) => {
    return (
        <div>
            {
                books.map(
                    book => <BookCard key={book.bookId} book={book}></BookCard>
                )
            }
        </div>
    );
};

export default Books;