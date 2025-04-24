import React, { useContext } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const Privetroute = ({children}) => {
    const {user,loader}=useContext(Authcontext)
    if(loader){
        return <div className='w-[20%] mx-auto'><span className="loading loading-bars loading-lg text-white mx-auto"></span></div>
    }
    if(!user){
      return <Navigate to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default Privetroute;