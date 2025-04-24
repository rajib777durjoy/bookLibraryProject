
import Banner from '../../Component/Banner/Banner';
import Bookcategories from '../../Component/BookCategories/Bookcategories';
import Success from '../../Component/Extra/Success';
import AuthorList from '../../Component/Extra/AuthorList';
const Home = () => {
    return (
        <div className={`w-[100%] `}>
          <div className='w-[100%] '>
            <Banner></Banner>
          </div>
          <div className='w-[100%] my-10'>
            <Success></Success>
          </div>
           <div className='w-[100%] my-10 '>
              <Bookcategories></Bookcategories>
           </div>
           <div className='w-[100%] my-10'>
            <AuthorList></AuthorList>
           </div>
        </div>
    );
};

export default Home;