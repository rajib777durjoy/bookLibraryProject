
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect, useState} from 'react';





const Mainlayout = () => {

const [themeMood,setThemeMood]=useState('')
    useEffect(() => {
        const thememood = localStorage.getItem('theme');
        setThemeMood(thememood);     
    }, [])
    const themehandlefun = ()=>{
      const thememood = localStorage.getItem('theme');
      setThemeMood(thememood);
    //   console.log('thememood value:',thememood)
    }
    console.log(themeMood)
    // console.log('theme', theme)
    return (
        <div className={`w-[100%]  min-h-screen ${themeMood === 'light'?" bg-white text-black":"bg-gray-950 text-white"}`}>
            <header className={`w-[100%] ${themeMood == 'light'?"bg-gray-600":'bg-gray-600'} `}>
                <Navbar themehandlefun={themehandlefun}></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;