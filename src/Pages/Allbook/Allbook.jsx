
import React, { useEffect, useState } from 'react';
// import { set } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from "motion/react"

const Allbook = () => {
    const [books, setbook] = useState([])
    const [toggle, settoggle] = useState(true)
    const [search,setsearchValue]=useState('')
    const updatepage = useNavigate();
    const { _id, name, image, quantity, authorName, category, description, rating, bookcontent } = books

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVERDEPLOYLINK}/books?search=${search}`)
            .then(res => {
                setbook(res.data)
            })
    },[])

    const handelFilter = () => {
        axios.get(`${import.meta.env.VITE_SERVERDEPLOYLINK}/books/filter`)
            .then(res => {
                setbook(res.data)
            })
    }
    return (
        <div className='w-[90%] mx-auto min-h-screen'>
            <div className='w-[100%] mt-2 mb-10 items-center grid grid-cols-3 gap-2 '>
                <div className=' h-[50px] rounded-lg bg-slate-300  text-white '>
                    <button onClick={handelFilter} className='w-[100%]  btn border-green-400'>Filter quantity</button>
                </div>
                <div className=''>
                    <label className="input border-green-400 input-bordered flex items-center gap-2">
                        <input onChange={(e)=>setsearchValue(e.target.value)} type="text" className="grow " placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn w-[100%] h-[50px]  border-green-400 ">View Functionality</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => settoggle(true)}><a>Card View</a></li>
                        <li onClick={() => settoggle(false)}><a>Table View</a></li>
                    </ul>
                </div>
            </div>


            <div className={`w-[100%] text-white my-2  gap-4  grid ${toggle && 'md:grid-cols-3 lg:grid-cols-4'}`}>
                {
                    books.map((book,index) => toggle ? <motion.div key={book?._id} className="card h-[400px] card-compact bg-base-100 text-black shadow-xl">
                        <figure className='my-2'>
                            <img
                                src={book?.image}
                                alt="Shoes" className='w-[270px] h-[200px]  rounded-lg' />
                        </figure>
                        <div className="w-[90%] mx-auto">
                            <h2 className="card-title"><span className='text-xl font-medium'>Name:</span>{book?.name}</h2>
                            <p><span className='text-xl font-medium'>AuthorName:</span> {book?.authorName}</p>
                            <h2><span className='text-xl font-medium'>Category:</span> {book?.category}</h2>
                            <h2 className='flex items-center gap-2'><span className='text-xl font-medium'>Rating:</span> <ReactStars
                                count={book?.rating}
                                size={24}
                                color="#ffd700"
                                edit={false}
                            /></h2>
                            <div className="card-actions justify-center my-4">
                                <Link to={`/updatepage/${book?._id}`}><button className="btn bg-green-400 w-[100%]">Update</button></Link>
                            </div>
                        </div>
                    </motion.div> : <table className="table bg-base-200 text-black"><thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name and Author Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead> <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                   <h1>{index}</h1>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={book?.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div>{book?.name}</div>
                                            <div className="text-sm opacity-50">{book?.authorName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                    
                                    <span className="badge badge-ghost badge-sm">{book?.category}</span>
                                </td>
                                <td>{book?.rating}</td>
                                <th>
                                <Link to={`/updatepage/${book?._id}`}><button className="btn btn-primary ">Update</button></Link>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    )
                }
            </div>
        </div>
    );
};

export default Allbook;