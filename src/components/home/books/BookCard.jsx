import React from 'react';

const BookCard = ({ book }) => {

    const { bookName, author, image, rating, tags, category } = book

    return (
        <div>
            <div className="card w-96 bg-base-50 hover:bg-base-200 shadow-xl border-gray-800">
                <figure className='p-4'><img src={image} alt={bookName} /></figure>
                <div className="card-body space-y-2">
                    <ul className='flex justify-between'>
                        {
                            tags.map(
                                (tag, idx) => <li className='badge badge-primary badge-outline' key={idx}>{tag}</li>
                            )
                        }
                    </ul>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="flex justify-between ">
                        <p>{category}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;