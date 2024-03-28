import { createContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getReadBooksFromLocalStorage, getWishListBooksFromLocalStorage } from '../../utils/local-storage';

export const SortReadBooks = createContext([])
export const SortWishlistBooks = createContext([])

const ListedBooks = () => {

    const [index, setIndex] = useState(0)

    // taking data from localStorage
    const [readbooks, setReadBooks] = useState([])
    useEffect(() => {
        const myreadBooks = getReadBooksFromLocalStorage()
        setReadBooks(myreadBooks)
    }, [])
    const [wishlistBooks, setWishlistBooks] = useState([])
    useEffect(() => {
        const wishlist = getWishListBooksFromLocalStorage()
        setWishlistBooks(wishlist)
    }, [])

    // Handleing sort by -
    function handleSortBy(e) {
        const sortValue = e.target.value;
        const sortedReadBooks = [...readbooks]
        setReadBooks(sortedReadBooks.sort((a, b) => b[`${sortValue}`] - a[`${sortValue}`]))
        const sortedWishlistBooks = [...wishlistBooks]
        setWishlistBooks(sortedWishlistBooks.sort((a, b) => b[`${sortValue}`] - a[`${sortValue}`]))
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20 mb-10 bg-base-200 p-4'>Books</h1>
            <div className="text-center mt-20 mb-10 p-4">
                <select onChange={handleSortBy} name="sort-by" className='p-3 bg-primary text-base-100 rounded-md' id="SortBy">
                    <option hidden>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of pages</option>
                    <option value="yearOfPublishing">Publisher year</option>
                </select>
            </div>
            <div role="tablist" className="tabs tabs-bordered my-8">
                <Link
                    onClick={() => setIndex(0)}
                    to=""
                    role="tab"
                    className={`tab ${index === 0 && 'tab-active'}`}
                >Read Books</Link>
                <Link
                    onClick={() => setIndex(1)}
                    to="wishlist"
                    role="tab"
                    className={`tab ${index === 1 && 'tab-active'}`}
                >Wishlist Books</Link>
            </div>

            <SortWishlistBooks.Provider value={wishlistBooks}>
                <SortReadBooks.Provider value={readbooks}>
                    <div className='min-h-screen'>
                        <Outlet></Outlet>
                    </div>
                </SortReadBooks.Provider>
            </SortWishlistBooks.Provider>

        </div>
    );
};

export default ListedBooks;