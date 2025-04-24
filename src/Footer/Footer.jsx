import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer w-[100%] bg-neutral text-neutral-content p-10 ">
            <nav className='w-[90%] mx-auto'>
                <div className='text-2xl font-medium'>Chapter<span className='text-green-400'>Vault</span></div>
                <div className=''>
                    <ul className='flex gap-4 '>
                        <Link to='https://www.facebook.com/' target='_blank'><li className='text-xl'><FaFacebookSquare className='text-green-400' /></li></Link>
                        <Link to='https://github.com/' target='_blank'><li className='text-xl'><FaGithub className='text-green-400' /></li></Link>
                        <Link to='https://www.linkedin.com/' target='_blank'><li className='text-xl'><BiLogoLinkedinSquare className='text-green-400' /></li></Link>
                        <Link to='https://www.google.com/' target='_blank'><li className='text-xl'><BiLogoGoogle className='text-green-400' /></li></Link>
                    </ul>
                </div>
            </nav>
            
            <nav className='hidden lg:block'>
                <h6 className="footer-title">Discover</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Book</a>
                <a className="link link-hover">Authors</a>
                <a className="link link-hover">Subject</a>
            </nav>
            <nav className='hidden lg:block'>
                <h6 className="footer-title">Help</h6>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Report A Problem</a>
                <a className="link link-hover">Suggestign Book</a>
            </nav>
            <div className='grid grid-cols-2'>
            <nav className=''>
                <h6 className="footer-title">Discover</h6>
                <a className="link link-hover block">Home</a>
                <a className="link link-hover block">Book</a>
                <a className="link link-hover block">Authors</a>
                <a className="link link-hover block">Subject</a>
            </nav>
            <nav className=''>
                <h6 className="footer-title">Help</h6>
                <a className="link link-hover block">Help Center</a>
                <a className="link link-hover block">Report A Problem</a>
                <a className="link link-hover block">Suggestign Book</a>
            </nav>
            </div>
            
        </footer>
    );
};

export default Footer;