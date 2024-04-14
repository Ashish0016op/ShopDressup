import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const [data,setData]=useState([]);
    const [isHover,setIsHover]=useState(null);
    const navigate = useNavigate();
    const fetchProduct=async()=>{
        try{
            const data=await fetch("https://dead-gold-binturong-kilt.cyclic.app/Product_Data");
            const parsedData=await data.json();
            setData(parsedData);
            console.log("hello ",parsedData);
        }catch(err){
            console.log(err);
        }
    }
 useEffect(()=>{
    fetchProduct();
 },[])
 const handleClick=(id)=>{
    navigate(`/products/${id}`);
 }
  return (
    <div>
        <div className='gap-[40px] mx-4 bg-white cursor-pointer grid grid-cols-3 overflow-hidden overflow-x-auto overflow-y-auto h-[900px]' style={{scrollbarWidth: 'none', msOverflowStyle: 'none', scrollbarColor: 'transparent transparent'}}>
            {data?.map((item, index) => (
                <div onClick={()=>handleClick(item.id)} className='h-[80%] w-full' key={item.id} 
                onMouseEnter={() => setIsHover(index)} 
                onMouseLeave={() => setIsHover(null)}>
                <img src={item.image_1} alt="First Image" 
                    className={`transition duration-300 ease-in-out h-full w-full transform hover:scale-105 ${isHover == index?'hidden':''}`} />
                <img src={item.image_2} alt="Second Image" 
                    className={`transition duration-300 h-full w-full ease-in-out transform hover:scale-105 ${isHover == index?'block':'hidden'}`} />
                    <div><p className='text-black flex justify-center mt-2 hover:cursor-pointer'>{item.name}</p></div>
                    <div><p className='text-black flex justify-center hover:cursor-pointer'>${item.price}</p></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SingleProduct