import React, { useEffect, useState } from 'react';
import BooklistCard from './BooklistCard';
import { getReadBooksFromLocalStorage } from '../../utils/local-storage';

const ReadBooks = () => {

    const readBooks = getReadBooksFromLocalStorage()
    // console.log(readBooks)

    return (
        <div className='flex flex-col gap-8'>
            {
                books.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
            }
        </div>
    );
};

export default ReadBooks;