import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
const Navbar = ({ themehandlefun }) => {
  const { user, singoutfun } = useContext(Authcontext)
  const [value, setValue] = useState('')
  useEffect(()=>{
    const themeValue= localStorage.getItem('theme')
    setValue(themeValue)
  },[])
  // const navigatelogin=useNavigate()
  const Items = <>
    <li className='mx-2 font-medium text-lg'><NavLink to='/'>Home</NavLink></li>
    <li className='mx-2 font-medium text-lg'><NavLink to='/allbook'>All Book</NavLink></li>
    {user ? <div className='lg:flex items-center '> <li className='mx-2 font-medium text-lg'><NavLink to='/addbook'>Add Book</NavLink></li>
      <li className='mx-2 font-medium text-lg'><NavLink to='/borrowed'>Borrowed</NavLink></li></div> : ''}

  </>
  // console.log('value',value)
  const signout = () => {
    // signOut(auth).then(()=>{
    //   
    // })
    singoutfun().then(() => {
      console.log('successfull')
      // navigatelogin('/login')
    })
    console.log("value", value)
  }
  return (
    <div className="w-[90%] mx-auto navbar bg-transparent opacity-50 ">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content justify-center bg-gray-600 text-white rounded-box z-50  mt-3 w-52 p-2 shadow">
            {Items}

            {
              user?<div className='lg:flex flex-col gap-2 items-start hidden'><span>{(user.photoURL)?.slice(0, 30)}</span><button onClick={signout} className='btn border-0 bg-green-400 text-white'>SignOut</button></div> : <div className='flex gap-2'>
                <NavLink to='/login'><button className='btn bg-green-400 text-white  border-0'>Login</button></NavLink>
                <NavLink to='register'><button className='btn bg-green-400 text-white  border-0'>Register</button></NavLink>
              </div>
            }
          </ul>
        </div>
        <a className=" btn-ghost text-2xl text-white font-extrabold">{user ? <div className='flex gap-2 items-center'>
          <img src="/librarylogo.jpg" alt="" className='w-[30px] h-[30px] rounded-full' />
          <div className={`hidden lg:block text-xl text-green-400`}>{user?.displayName}</div>
        </div>:<div className='text-black'>Chapter<span className='text-green-400'>Vault</span></div>}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Items}

        </ul>
      </div>
      <div className="navbar-end gap-2">
        {
          value === 'light' ? <li onClick={() => {
            localStorage.setItem('theme','dark')
            themehandlefun()
            const themes= localStorage.getItem('theme')
            setValue(themes)
            console.log('hello world dark')
          }} className='text-white list-none'><IoMoonOutline className='text-[30px]' />
          </li> :
            <li className='text-white list-none' onClick={() => {
              localStorage.setItem('theme', 'light')
              themehandlefun()
              const themes= localStorage.getItem('theme')
            setValue(themes)
              console.log('hello world light')
            }}><CiLight className='text-white text-[30px] ' /></li>
        }       
        {
          user ? <div className='flex gap-2 items-center'><span className='hidden md:flex'></span><button onClick={signout} className='btn border-0 bg-green-400 text-white'>SignOut</button></div> : <div className='flex gap-2'>
            <NavLink to='/login'><button className='btn bg-green-400 text-white  border-0'>Login</button></NavLink>
            <NavLink to='register'><button className='btn bg-green-400 text-white  border-0'>Register</button></NavLink>
          </div>
        }

      </div>
    </div>
  );
};

export default Navbar;