import React from 'react';
import { motion } from "motion/react";
const AuthorList = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center  text-2xl  my-3'>Author</h1>
            <div className='w-[90%] mx-auto mt-10  min-h-[300px] grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: [.7, .9, 1], y: 0, scale: 1 }}
                    transition={{ duration: .8, ease: 'easeIn' }}
                    className="card card-side border border-green-400  bg-slate-900 text-white shadow-xl">
                    <figure>
                        <img
                            src="/ThomasImage.jpg"
                            alt="Movie" className='w-[90%] mx-auto h-[200px]' />
                    </figure>
                    <div
                      
                        className="card-body">
                        <h2 className="w-[180px] font-bold ">Thomas H. Cormen</h2>
                        <div className="card-actions justify-center mt-20">
                            <button className="btn bg-green-400 w-[100%]">More</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: [.7, .9, 1], y: 0, scale: 1 }}
                    transition={{ duration: .8, ease: 'easeIn' }}
                    className="card card-side border border-green-400  bg-slate-900 text-white shadow-xl">
                    <figure>
                        <img
                            src="/susanMedicine.jpg"
                            alt="Movie" className='w-[90%] mx-auto h-[200px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className="w-[180px] font-bold">Susan Standring</h2>
                        <div className="card-actions justify-center mt-20">
                            <button className="btn bg-green-400 w-[100%]">More</button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: [.7, .9, 1], y: 0, scale: 1 }}
                    transition={{ duration: .8, ease: 'easeIn' }}
                    className="card card-side border border-green-400 bg-slate-900 text-white shadow-xl">
                    <figure>
                        <img
                            src="/banjamin.jpg"
                            alt="Movie" className='w-[90%] mx-auto h-[200px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className=" w-[150px]  font-bold">Paulo Coelho</h2>

                        <div className="card-actions justify-center mt-20">
                            <button className="btn bg-green-400 w-[100%]">More</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >

    );
};

export default AuthorList;