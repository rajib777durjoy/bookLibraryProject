import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { useNavigate } from 'react-router-dom';


const instanceAxios = axios.create({
    baseURL:import.meta.env.VITE_SERVERDEPLOYLINK,
    withCredentials:true
   
  });
const UseAxios = () => {
  const {singoutfun}=useContext(Authcontext)
  const navigate=useNavigate()
    useEffect(()=>{
      instanceAxios.interceptors.response.use(response=>{
        return response;
      },error=>{
        if(error.status === 401 || error.status === 403){
          singoutfun()
          .then(()=>{
            console.log('logout user')
            navigate('/login')
          })
          .catch(error=>console.log(error))
        }
        return Promise.reject(error)
      })
    },[])
    return instanceAxios
       
};

export default UseAxios;