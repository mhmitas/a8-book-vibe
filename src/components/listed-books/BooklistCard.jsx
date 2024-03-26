import React from 'react';
import { Link } from 'react-router-dom';

const BooklistCard = ({ book }) => {
    const { bookName, author, image, rating, tags, category, bookId } = book

    return (
        <div className="card card-side bg-base-100 border border-base-200 shadow-xl p-4">
            <figure className='p-6 border bg-base-200 rounded-md border-base-200'><img src={image} alt={bookName} /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By {author}</p>
                <ul className='flex gap-10'>
                    {tags.map((tag, idx) => <li className='badge badge-primary badge-outline' key={idx}>{tag}</li>)}
                </ul>
                <Link to={`/bookDetails/${bookId}`} className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BooklistCard;