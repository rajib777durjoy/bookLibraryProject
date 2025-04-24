import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Bookdisplay = () => {
    const [books, setbooks] = useState([])
    const { category } = useParams()
    // console.log(category)
    axios.get(`${import.meta.env.VITE_SERVERDEPLOYLINK}/categorys/${category}`)
        .then(res => {
            setbooks(res.data)
        })
    return (
        <div className='text-white grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                books.map(book =><div className="card card-compact text-black bg-base-100 h-[350px] shadow-xl">
                    <figure>
                        <img
                            src={book?.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">{book?.name}</h2>
                        <p className='text-black'>{book?.authorName}</p>
                        <p>{book?.category}</p>
                        <p>{book?.quantity}</p>
                        <p>{book?.rating}</p>
                        <div className="card-actions justify-center">
                           <Link to={`/detailspage/${book?._id}`}><button className="btn btn-primary">Details</button></Link>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Bookdisplay;