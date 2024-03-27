import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdTime } from "react-icons/io";


const BooklistCard = ({ book }) => {
    const { bookName, author, image, rating, tags, category, bookId, yearOfPublishing, publisher, totalPages } = book

    return (
        <div className="card card-side bg-base-100 border border-base-200 shadow-xl p-4">
            <figure className='p-6 border bg-base-200 rounded-md border-base-200'><img src={image} alt={bookName} /></figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className='flex gap-16 items-center'>
                    <ul className='flex gap-6 items-center'>
                        <h3>Tag</h3>
                        {tags.map((tag, idx) => <li className='badge badge-primary badge-outline' key={idx}>{tag}</li>)}
                    </ul>
                    <div className='flex items-center gap-1'><IoMdTime /> Year of Publishing{yearOfPublishing}</div>
                </div>
                <div className='flex gap-16 items-center'>
                    <div>Publisher : {publisher}</div>
                    <div className='flex items-center gap-1'>Pages: {totalPages}</div>
                </div>
                <div className='card-actions gap-20 items-center'>
                    <div className='badge badge-primary badge-outline p-4'>Catagory: {category}</div>
                    <div className='badge badge-primary badge-outline p-4'>Rating: {rating}</div>
                    <Link to={`/bookDetails/${bookId}`} className="">
                        <button className="btn btn-primary rounded-xl">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BooklistCard;