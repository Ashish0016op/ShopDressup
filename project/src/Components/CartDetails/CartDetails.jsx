
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { IoStorefrontSharp } from "react-icons/io5";
import { FaFacebookF} from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import AddToCartSidebar from '../AddToCartSidebar';
import { setAddToCart } from '../../Redux/CartSlice';
const CartDetails = () => {
  const cartProduct = useSelector(state => state.cartItem.cartProduct);
  const dispatch=useDispatch();
  const [productImage, setProductImage] = useState('');
  const [isOpen,setIsOpen]=useState(true);
  const [isAddToCart,setIsAddToCart]=useState(false);
  useEffect(() => {
    
    if (cartProduct && cartProduct.image_1) {
      setProductImage(cartProduct.image_1);
    }
  }, [cartProduct]);
  const image1=cartProduct.image_1;
  const image2=cartProduct.image_2;
  const image3=cartProduct.image_3;
  const image4=cartProduct.image_4;
  const image5=cartProduct.image_5;
  const images=[
    image1,image2,image3,image4,image5
  ];
  const handleImageClick=(img)=>{
    setProductImage(img);
  }
  const handleAddToCartClick=async()=>{
      dispatch(setAddToCart(cartProduct))
      if(isAddToCart){
        setIsAddToCart(false);
      }else{
        setIsAddToCart(true);
      }
  }
  if (!cartProduct) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className='py-5 justify-center flex gap-2'>
      <div className='ml-16 flex flex-col gap-5'>
          {images.map((img,ind)=>{
            return(
              <div onClick={()=>handleImageClick(img)} className='h-[110px] w-[80px] cursor-pointer hover:border-2' key={ind}><img src={img} alt='image'/></div>
            )
          })}
      </div>
      <div className='w-[415px]'>
          <img className='w-[100%]' src={productImage} alt='image'/>
      </div>
      <div className='text-black ml-11 flex flex-col gap-4 overflow-hidden overflow-x-auto overflow-y-auto h-[638px]' style={{scrollbarWidth: 'none', msOverflowStyle: 'none', scrollbarColor: 'transparent transparent'}}>
          <div className=''>
            <p>{cartProduct.name}</p>
          </div>
          <div>
            <p>${cartProduct.price}</p>
            <p>or 4 interest-free payments of $ 8.50 with Sezzle</p>
          </div>
          <div><hr className='h-[2px] bg-black'/></div>
          <div>
            <p>COLOR —{cartProduct.color}</p>
          </div>
          <div>
            <div className={`h-[40px] w-[42px] border-solid border-black border-2 rounded-full`} style={{backgroundColor:`${cartProduct.color}`}}></div>
          </div>
          <div>
            <div><p>SIZE</p></div>
            <div className='flex flex-row gap-1'>
              <button className='border-solid border-2 border-black px-2'>Small</button>
              <button className='border-solid border-2 border-black px-2'>Medium</button>
              <button className='border-solid border-2 border-black px-2'>Large</button>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-[9px] w-[9px] bg-green-600 rounded-full animate-ping'></div>
            <div><p>In stock, ready to ship</p></div>
          </div>
          <div className='flex flex-col gap-2'>
            <label onClick={handleAddToCartClick}
                htmlFor="my-drawer-4"
                className="drawer-button cursor-pointer border-black border-x border-y h-[45px] flex justify-center items-center"
              >
                ADD TO CART
              </label>
            
            {isAddToCart && <AddToCartSidebar/>}
            <div>
              <button className='p-2 w-full bg-[#5A31F4] text-white'>Buy with Shop pay</button>
            </div>
            <div className='flex justify-center'>
              <p className='cursor-pointer hover:border-b-2 border-black'>More payment options</p>
            </div>
          </div>
          <div className='p-2'>
            <div><p>Stock Online</p></div>
            <div>
              <button onClick={()=>isOpen?setIsOpen(false):setIsOpen(true)} className='border-solid border-2 border-black p-2 w-full items-center flex gap-8'><IoStorefrontSharp/>CHECK STORE AVAILABILITY</button>
            </div>
            {isOpen &&
              <div className='p-4 w-full'>
                <div className='w-full gap-3 flex'>
                  <input type='text' placeholder='Enter Zip or Postal code' className='bg-white h-10 w-fit'/>
                  <button className='border-solid border-2 border-black p-2 w-fit'>Find</button>
                </div>
                <div className='flex justify-between py-5'>
                  <div>
                    <p>Charleston</p>
                    <p>Savannah</p>
                    <p>Greenville</p>
                    <p>Athens</p>
                    <p>Website</p>
                  </div>
                  <div>
                    <p>Store Pickup is Available</p>
                    <p>Store Pickup is Available</p>
                    <p>Store Pickup is Available</p>
                    <p>Store Pickup is Available</p>
                    <p>Store Pickup is Available</p>
                  </div>
                </div>
              </div>}
          </div>
          <div className='flex gap-9 items-center'>
              <div className='flex gap-3 items-center cursor-pointer'><FaFacebookF/> Share</div>
              <div className='flex gap-3 items-center cursor-pointer'><IoLogoTwitter/> Tweet</div>
              <div className='flex gap-3 items-center cursor-pointer'><FaPinterest/> Pin it</div>
          </div>
      </div>
    </div>
  )
}

export default CartDetails