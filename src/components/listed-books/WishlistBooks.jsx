import React from 'react';
import { getWishListBooksFromLocalStorage } from '../../utils/local-storage';
import BooklistCard from './BooklistCard';

const WishlistBooks = () => {
    const wishlist = getWishListBooksFromLocalStorage()
    console.log(wishlist)
    return (
        <div>
            {
                wishlist.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
            }
        </div>
    );
};

export default WishlistBooks;