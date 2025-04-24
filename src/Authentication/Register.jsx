import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimi from '../assets/registerAnimation.json'
import { Authcontext } from '../Authprovider/Authprovider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Register = () => {
    const {createRegister}=useContext(Authcontext)
    const navigetHome=useNavigate()
    const handelRegisterform=(e)=>{
        e.preventDefault()
        const form=e.target;
        const formdata=new FormData(form);
        const forminfo=Object.fromEntries(formdata.entries())
        console.log(forminfo)
       createRegister(forminfo?.email,forminfo?.password).then(res=>{
        toast.success('Register successfull')
        updateProfile(auth.currentUser,{
            displayName:forminfo?.name,
            photoURL:forminfo?.photo
        })
        navigetHome('/')
       
       })
       const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   
       if(!regex.test(forminfo?.password)){
           toast.error('please vaild password')
           return ;
       }
    } 
    return (
        <div className="hero bg-blue-950 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-[40%]'>
                <Lottie animationData={registerAnimi}  />
                </div>
                <div className='w-[50%] border-2 bg-white rounded-lg'>
                    <form onSubmit={handelRegisterform} className="card-body">
                    <h1 className='text-center font-bold text-2xl'>Register </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='text-center mb-5 text-black '>Already have an account? <Link to='/login' className='text-green-400 font-medium'>Login</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Register;