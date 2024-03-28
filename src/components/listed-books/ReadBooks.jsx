import { useContext } from 'react';
import BooklistCard from './BooklistCard';
import { SortReadBooks } from './ListedBooks';

const ReadBooks = () => {

    const readBooks = useContext(SortReadBooks)
    // console.log(readBooks)
    return (
        <div className='flex flex-col gap-8'>
            <div className=" mt-20 mb-10 p-4 hidden">
                <select name="SortBy" className='p-3 bg-secondary text-base-100 font-semibold rounded-md' id="SortBy">
                    <option hidden>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of pages</option>
                    <option value="yearOfPublishing">Publisher year</option>
                </select>
            </div>
            {
                readBooks.map(book => <BooklistCard key={book.bookId} book={book}></BooklistCard>)
            }
        </div>
    );
};

export default ReadBooks;