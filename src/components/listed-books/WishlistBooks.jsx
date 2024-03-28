import { useContext } from 'react';
import BooklistCard from './BooklistCard';
import { SortWishlistBooks } from './ListedBooks';

const WishlistBooks = () => {
    const wishlistBooks = useContext(SortWishlistBooks)

    return (
        <div className='flex flex-col gap-8'>
            <div className=" mt-20 mb-10 p-4 hidden">
                <select name="SortBy" className='p-3  bg-secondary text-base-100 font-semibold rounded-md' id="SortBy">
                    <option>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of pages</option>
                    <option value="yearOfPublishing">Publisher year</option>
                </select>
            </div>
            <div>
                {
                    wishlistBooks.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;