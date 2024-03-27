import React, { useEffect, useState } from 'react';
import BooklistCard from './BooklistCard';
import { getReadBooksFromLocalStorage } from '../../utils/local-storage';
import { sortByDesendingOrder } from '../../utils/sortByDecendingOrder';

const ReadBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const readBooks = getReadBooksFromLocalStorage()
        setBooks(readBooks)
    }, [])


    // const handleSort = (param) => {
    //     const readBooks = [...books]
    //     console.log(readBooks)
    //     readBooks.sort((a, b) => b[`${param}`] - a[`${param}`])
    //     setBooks(readBooks)
    // }



    return (
        <div className='flex flex-col gap-8'>
            {/* <button onClick={() => handleSort('rating')} className='btn'>sort</button> */}
            {
                books.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
            }
        </div>
    );
};

export default ReadBooks;