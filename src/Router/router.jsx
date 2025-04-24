import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Error from '../Layout/Error';
import Home from '../Pages/Home/Home'
import Allbook from '../Pages/Allbook/Allbook';
import Addbook from '../Pages/Addbook/Addbook';
import Borrowed from '../Pages/Borrowed/Borrowed';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import Privetroute from '../PrivetRoute/Privetroute';
import Bookdetails from '../Pages/BookDetails/Bookdetails';
import Updatepage from '../Pages/Update/Updatepage';
import Bookdisplay from '../Pages/BookDisplay/Bookdisplay';

const router= createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement:<Error></Error>,
      children:[
        {
         index:true,
         element:<Home></Home>
        },
        
        {
          path:'/bookDisplay/:category',
          element:<Bookdisplay></Bookdisplay>
        },
        {
         path:'/detailspage/:id',
         element:<Privetroute><Bookdetails></Bookdetails></Privetroute>
        },
        {
          path:'/allbook',
          element:<Privetroute><Allbook></Allbook></Privetroute>
        },
        {
          path:'/updatepage/:id',
          element:<Updatepage></Updatepage>
        },
        {
            path:'/addbook',
            element:<Privetroute><Addbook></Addbook></Privetroute>
        },
        {
            path:'/borrowed',
            element:<Privetroute><Borrowed></Borrowed></Privetroute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }

      ]
    },
  ]); 

export default router;