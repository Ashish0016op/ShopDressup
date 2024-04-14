
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar'
import CartDetails from '../Components/CartDetails/CartDetails'
import { useEffect } from 'react';
import { useDispatch} from 'react-redux'
import { setCartProduct } from '../Redux/CartSlice';
import Footer from '../Components/Footer';
const Product = () => {
  const id=useParams();
  const dispatch=useDispatch();
  const fetchSingleProduct=async()=>{
    try{
      const data=await fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data/${id.id}`)
      const parsedData=await data.json();
      const dis=dispatch(setCartProduct(parsedData));
      console.log(dis);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchSingleProduct();
  },[])
  return (
    <div className='bg-white'>
        <NavBar/>
        <CartDetails/>
        <Footer/>
    </div>
  )
}

export default Product