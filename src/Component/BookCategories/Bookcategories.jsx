import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
const Bookcategories = () => {
    return (
        <div className='min-h-[100px] my-20'>
            <h1 className='text-center text-white text-2xl my-2'>Book Category</h1>
            <div className='w-[90%] my-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center'>
                <Link
                 to='/bookDisplay/Computer Science'>
                    <motion.div
                    initial={{opacity:0,y:50,scale:0.8}}
                    whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                    transition={{duration:.8,ease:'easeIn'}}
                     className=" h-[100px] border border-green-400 rounded-lg bg-slate-900 ">
                        
                        <h2 className='text-green-400 text-xl text-center mt-10 '>Computer Science</h2>

                    </motion.div>
                </Link>

                <Link to='/bookDisplay/Medicine'>
                    <motion.div
                    initial={{opacity:0,y:50,scale:0.8}}
                    whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                    transition={{duration:.8,ease:'easeIn'}}
                     className=" h-[100px] border border-green-400 rounded-lg bg-slate-900">
                        
                        <h2 className='text-green-400 text-xl mt-10  text-center'>Medicine</h2>

                    </motion.div>
                </Link>

                <Link to='/bookDisplay/Business & Finance'>
                    <motion.div
                    initial={{opacity:0,y:50,scale:0.8}}
                    whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                    transition={{duration:.8,ease:'easeIn'}}
                     className=" h-[100px] border border-green-400 rounded-lg bg-slate-900">
                        
                        <h2 className='text-green-400 text-xl mt-10 text-center'>Business & Finance</h2>

                    </motion.div>
                </Link>

                <Link to='/bookDisplay/Travel & Adventure'>
                    <motion.div
                    initial={{opacity:0,y:50,scale:0.8}}
                    whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                    transition={{duration:.8,ease:'easeIn'}}
                     className=" h-[100px] border border-green-400 rounded-lg bg-slate-900">
                        <h2 className='text-green-400 text-xl mt-10 text-center'>Travel & Adventure</h2>

                    </motion.div>
                </Link>

            </div>
        </div>

    );
};

export default Bookcategories;