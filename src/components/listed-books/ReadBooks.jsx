import React, { useEffect, useState } from 'react';
import BooklistCard from './BooklistCard';
import { getReadBooksFromLocalStorage } from '../../utils/local-storage';

const ReadBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const readBooks = getReadBooksFromLocalStorage()
        setBooks(readBooks)
    }, [])


    const handleSort = (e) => {
        const readBooks = [...books]
        readBooks.sort((a, b) => b[`${e.target.value}`] - a[`${e.target.value}`])
        setBooks(readBooks)
    }
    return (
        <div className='flex flex-col gap-8'>
            <div className=" mt-20 mb-10 p-4">
                <select onChange={handleSort} name="SortBy" className='p-3 bg-secondary text-base-100 font-semibold rounded-md' id="SortBy">
                    <option>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of pages</option>
                    <option value="yearOfPublishing">Publisher year</option>
                </select>
            </div>
            {
                books.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
            }
        </div>
    );
};

export default ReadBooks;