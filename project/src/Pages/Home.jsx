
import NavBar from '../Components/NavBar'
import Category from '../Components/Category'
import NewArrival from '../Components/NewArrival'
import SwiperComponent from '../Components/SwiperComponent'
import Details from '../Components/Details'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  
  return (
    <div className='bg-[#FFFFFF]'>
        <NavBar/>
       
        <Link to="/collections"><div className="w-full">
            <img className="cursor-pointer" src="https://shopdressup.com/cdn/shop/files/hero_oversized_button_up_1944x.webp?v=1707491011" alt="image">
            </img>
        </div>
        </Link>
        <div className='bg-[#FBF0EE] text-black flex justify-center gap-3 p-3'>
            <div><h2>BUY ONLINE & PICK UP IN STORE</h2></div>
            <div><p>select “store pick up” at checkout + pick up same day!</p></div>
        </div>
        <Category/>
        <div className='mt-11 text-black flex justify-center'>Get a Cute Dress Online at Dress Up - Online Dress Boutique</div>
        <NewArrival/>
        <hr className='mt-20 h-[2px] bg-black'/>
        <div className='my-14'>
          <div>
            <p className='text-xl text-black flex justify-center py-8'>Love From Our Guests</p>
          </div>
        <SwiperComponent/>
        </div>
        <Details/>
        <Footer/>
    </div>
  )
}

export default Home