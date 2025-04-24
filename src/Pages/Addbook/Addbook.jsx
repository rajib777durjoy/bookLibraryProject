import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Authcontext } from '../../Authprovider/Authprovider';
import UseAxios from '../../Authentication/UseAxios';

const Addbook = () => {
const {user,thememoodvalue}=useContext(Authcontext)
const axiosInst=UseAxios()
const handeladdbookinfo=(e)=>{
    e.preventDefault()
    const form=e.target;
    const bookdata=new FormData(form);
    let bookInfo=Object.fromEntries(bookdata.entries())
    // console.log(bookInfo)
    bookInfo.quantity=Number(bookInfo?.quantity)
    console.log(bookInfo)
    const bookDetails={...bookInfo,userEmail:user?.email}
  
    if(bookInfo?.rating>5){
        return toast.error('rating number maximum 5')
    }
   
    axiosInst.post(`${import.meta.env.VITE_SERVERDEPLOYLINK}/addbook`,bookDetails)
    .then(res=>{
        console.log('add book',res)
        toast.success("Book Add Successfull")
    })
   
}
    return (
        <div className='w-[100%] mx-auto '>
            <form onSubmit={handeladdbookinfo} className={`card-body bg-gray-600 w-[100%] border-2 border-green-400 grid lg:grid-cols-2 gap-4 md:w-[90%] mx-auto my-10 rounded-md shadow-md shadow-green-400`}>
                <div className=''>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Image</span>
                    </label>
                    <input type="url" name='image' placeholder="Image" className="input text-black input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input  input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Quantity</span>
                    </label>
                    <input type='number' name='quantity' placeholder="Quantity" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Author Name</span>
                    </label>
                    <input type="text" name='authorName' placeholder="Author Name" className="input input-bordered text-black " required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Category</span>
                    </label>
                    <select name='category' className="select select-ghost  w-[100%] bg-slate-50 text-black ">
                        <option disabled selected>Pick the best JS framework</option>
                        <option>Computer Science</option>
                        <option>Medicine</option>
                        <option>Business & Finance</option>
                        <option>Travel & Adventure</option>
                    </select>
                </div>
                </div>
                <div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Short Description</span>
                    </label>
                    <textarea className='ps-4 border-2 rounded-md text-black' name="description" placeholder='Enter Short Description' rows={5} cols={5} id=""></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Enter Numeric Input (1-5)" className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className={`label-text ${thememoodvalue== 'light'?'bg-gray-600 text-black':'text-white '}`}>BookContext</span>
                    </label>
                   <textarea className='ps-4 border-2 rounded-md text-black' rows={5} cols={5} name="bookcontent" id="" placeholder='Enter Information about the book'></textarea>
                </div>
                <div className="form-control mt-6 w-[100%] lg:w-[30%] lg:ml-auto">
                    <button type='submit' className="btn bg-green-400 lg:translate-x-7 boutline-none border-0 w-[150px]  text-xl font-medium">Add Book</button>
                </div>
                </div>
                
            </form>
        </div>
    );
};

export default Addbook;