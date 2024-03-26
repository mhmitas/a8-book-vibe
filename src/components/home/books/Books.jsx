import React from 'react';
import BookCard from './BookCard';

const Books = ({ books }) => {
    return (
        <div className='grid md:grid-cols-3 p-6 gap-4 max-w-screen-xl mx-auto  mb-20'>
            {
                books.map(
                    book => <BookCard key={book.bookId} book={book}></BookCard>
                )
            }
        </div>
    );
};

export default Books;