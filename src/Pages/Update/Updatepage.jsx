import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Updatepage = () => {
    const [books,setbooks]=useState([])
    const {id}=useParams()
    const { _id, name, image, quantity, authorName, category, description, rating, bookcontent } = books
    console.log(id)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVERDEPLOYLINK}/updatebook/${id}`)
        .then(res=>{
            setbooks(res.data)
        })
      },[])
    console.log(books)
    const handelsubmitform=(e)=>{
       e.preventDefault()
       const data=new FormData(e.target)
       const dataUpdate=Object.fromEntries(data.entries())
       console.log(dataUpdate)
     fetch(`${import.meta.env.VITE_SERVERDEPLOYLINK}/bookupdate/${books?._id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dataUpdate)
     }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('Update Successfull')
            }
            console.log(data)
        })
    }
    return (
        <div className='w-[90%] mx-auto min-h-screen text-xl text-black'>
            <form onSubmit={handelsubmitform} className="card-body w-[60%] mx-auto bg-slate-200 mt-10 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="url" name='image'  defaultValue={books?.image} placeholder='' className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={books?.name} placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Authors Name</span>
                    </label>
                    <input type="text" name='authorName' defaultValue={books?.authorName}  placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Categroy</span>
                    </label>
                    <select name='category' defaultValue={books?.category} className="select select-ghost  w-[100%] bg-white">
                        <option disabled >Pick the best JS framework</option>
                        <option>Computer Science</option>
                        <option>Medicine</option>
                        <option>Business & Finance</option>
                        <option>Travel & Adventure</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' defaultValue={books?.rating} placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Updatepage;