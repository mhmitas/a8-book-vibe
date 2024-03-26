import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {

    const { bookName, author, image, rating, tags, category, bookId } = book

    return (
        <div>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card border border-base-300 bg-base-50 hover:bg-base-200 shadow-xl">
                    <figure className='p-4'><img src={image} alt={bookName} /></figure>
                    <div className="card-body space-y-2">
                        <ul className='flex justify-between'>
                            {tags.map((tag, idx) => <li className='badge badge-primary badge-outline' key={idx}>{tag}</li>)}
                        </ul>
                        <h2 className="card-title">{bookName}</h2>
                        <p>By : {author}</p>
                        <div className="flex justify-between ">
                            <p>{category}</p>
                            <p className='flex gap-2 items-center text-center'><FaRegStar />{rating}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;