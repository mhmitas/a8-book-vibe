import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { setItemsToLocalStorage, setWishListBooksToLocalStorage } from '../../utils/local-storage';

const BookDetails = () => {
    const books = useLoaderData()
    const { Id } = useParams()
    // console.log(Id)

    const myBook = books.find(book => book.bookId == Id)
    const { bookName, author, image, rating, tags, category, bookId, review, totalPages, yearOfPublishing, publisher } = myBook
    // console.log(myBook)

    const handleRead = () => {
        setItemsToLocalStorage(myBook)
    }
    const handleWishlist = () => {
        setWishListBooksToLocalStorage(myBook)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className='rounded-xl bg-base-200 p-16'>
                        <img src={image} className="rounded-lg w-96 shadow-2xl " />
                    </div>
                    <div className='space-y-6'>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <h3><span className="font-bold">By </span> : {author}</h3>
                        <hr />
                        <h3 className="font-bold">{category}</h3>
                        <hr />
                        <p className="py-6"><span className="font-bold">Review: </span>{review}</p>
                        <ul className='flex gap-6 items-center'>
                            <span className="font-bold">Tag: </span>
                            {tags.map((tag, idx) => <li className='badge badge-primary badge-outline' key={idx}>{tag}</li>)}
                        </ul>
                        <table className='w-1/2 '>
                            <tbody className='*:p-4'>
                                <tr>
                                    <td>Number of Pages:</td>
                                    <td className="font-bold">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td>Publisher:</td>
                                    <td className="font-bold">{publisher}</td>
                                </tr>
                                <tr>
                                    <td>Year of Publishing:</td>
                                    <td className="font-bold">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td>Rating:</td>
                                    <td className="font-bold">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex gap-6'>
                            <button onClick={handleRead} className="btn btn-secondary btn-outline">Read</button>
                            <button onClick={handleWishlist} className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;