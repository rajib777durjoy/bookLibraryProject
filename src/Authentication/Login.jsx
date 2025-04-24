import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginanimi from '../assets/loginAnimation.json'
import { Authcontext } from '../Authprovider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase/firebase';

const Login = () => {
 const {createLogin}=useContext(Authcontext)
 const provider = new GoogleAuthProvider();
 const navigate=useNavigate()
 const handelloginsubmit=(e)=>{
    e.preventDefault()
     const form=e.target;
     const email=form.email.value;
     const password=form.password.value;
     const data={email,password}
     console.log(data)
    
    createLogin(email,password).then(res=>{
        console.log(res)
        toast.success('Login Successfull')
        navigate('/')
    })
 
   } 
   const handelgoogle=()=>{
   
    signInWithPopup(auth, provider)
    .then(res=>{
        navigate('/')
    })
    .catch(error=>{
       
    })


  }

    return (
        <div className="hero bg-blue-950 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-[40%]'>
                <Lottie animationData={loginanimi}  />
                </div>
                <div className='w-[50%] border-2 bg-white rounded-lg'>
                    <form onSubmit={handelloginsubmit} className="card-body">
                        <h1 className='text-center font-bold text-2xl'>Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                            <button type='submit' className="btn bg-green-400 text-white">Login</button>

                        </div>
                    </form>
                    <div className='w-[90%] mx-auto'>
                    <button onClick={handelgoogle} className='btn w-[100%] my-2 bg-green-400 text-white'>Google</button>
                    </div>
                   
                    <div className='text-center text-black mb-5'>Don't have an account? <Link to='/register' className='text-green-400 font-medium'>Register</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Login;