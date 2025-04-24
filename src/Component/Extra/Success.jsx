import React from 'react';
import CountUp from 'react-countup';
import { FaBookOpen } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { motion } from "motion/react"
const Success = () => {
    return (
        <div>
            <h1 className='text-center  text-2xl'>Success Section</h1>
            <div className=' my-2 grid md:grid-cols-3 w-[90%] mx-auto gap-4 mt-10'>
                <motion.div
                  initial={{opacity:0,y:50,scale:0.8}}
                  whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                  transition={{duration:.8,ease:'easeIn'}}
                 className='text-center flex flex-col border border-green-400 items-center bg-slate-900 text-white justify-center h-[100px] rounded-lg'>
                    <h1 className='text-2xl'><FaUsers className='text-4xl text-green-400'/></h1>
                    <CountUp className='text-2xl'
                        start={0}
                        end={50}
                        duration={3}
                    > </CountUp>
                </motion.div>
                <motion.div
                 initial={{opacity:0,y:50,scale:0.8}}
                 whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                 transition={{duration:1,ease:'easeIn'}}
                 className='text-center flex flex-col border border-green-400 items-center bg-slate-900 text-white justify-center h-[100px]  rounded-lg'>
                    <h2 className='text-2xl'><FaBookOpen className='text-4xl text-green-400'/></h2>
                    <CountUp className='text-2xl'
                        start={0}
                        end={400}
                        duration={3}
                    ></CountUp>
                </motion.div>
                <motion.div
                 initial={{opacity:0,y:50,scale:0.8}}
                 whileInView={{opacity:[.7,.9,1],y:0,scale:1}}
                 transition={{duration:1.2,ease:'easeIn'}}
                  className='text-center flex flex-col items-center border border-green-400 bg-slate-900 text-white justify-center h-[100px] rounded-lg'>
                    <h2 className='text-2xl'><FaBook className='text-4xl text-green-400' /></h2>
                    <CountUp className='text-2xl'
                        start={0}
                        end={20}
                        duration={3}
                    ></CountUp>
                </motion.div>
            </div>
        </div>

    );
};

export default Success;