import { useEffect, useState } from 'react';
import { getWishListBooksFromLocalStorage } from '../../utils/local-storage';
import BooklistCard from './BooklistCard';

const WishlistBooks = () => {
    // const wishlist = getWishListBooksFromLocalStorage()
    // console.log(wishlist)
    const [books, setBooks] = useState([])
    useEffect(() => {
        const wishlist = getWishListBooksFromLocalStorage()
        setBooks(wishlist)
    }, [])

    const handleSort = (e) => {
        const wishlistBooks = [...books]
        wishlistBooks.sort((a, b) => b[`${e.target.value}`] - a[`${e.target.value}`])
        setBooks(wishlistBooks)
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
            <div>
                {
                    books.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;