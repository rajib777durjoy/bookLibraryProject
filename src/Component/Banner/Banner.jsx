import React from 'react';
import bookimage from '/3dBookimage-removebg-preview.png'
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className='w-[90%] mx-auto min-h-[600px] lg:flex justify-between gap-4 items-center'>
            <div className='w-[100%]  lg:w-[50%] my-5 lg:my-0'>
                <motion.h1
                initial={{opacity:0,y:50,scale:0.9}}
                whileInView={{opacity:1,y:0,scale:1}}
                transition={{duration:1}}
                 className='text-2xl text-green-400 font-bold my-4'>Read.Learn.Grow</motion.h1>
                <motion.h2
                initial={{opacity:0,y:50,scale:0.9}}
                whileInView={{opacity:1,y:0,scale:1}}
                transition={{duration:1}}
                 className='text-xl font-bold my-4'>From fiction to facts, access a world of knowledge in one place.</motion.h2>
                <motion.p
                 initial={{opacity:0,y:50,scale:0.9}}
                 whileInView={{opacity:1,y:0,scale:1}}
                 transition={{duration:1}}
                 className='text-slate-400'
                >Welcome to our digital Book Library — a space built for curious minds and passionate readers. Whether you’re a casual reader or a dedicated bookworm, our library brings you a vast collection of books from every genre. Explore fiction, non-fiction, academic resources, and timeless classics — all in one beautifully organized platform. Easy to use, simple to search, and perfect for discovering your next great read.</motion.p>
            </div>
            <motion.div 
            initial={{opacity:1}}
            animate={{scale:[0.9,0.860,0.9]}}
            transition={{duration:6,ease:"easeInOut",repeat: Infinity}}
             className='my-5 lg:my-0 h-[400px] rounded-md shadow-md shadow-green-400 z-40  drop-shadow-md'>
                <img src={bookimage} alt="" className='rounded-md  h-[100%] drop-shadow-md ' />
            </motion.div>
        </div>
    );
};

export default Banner;