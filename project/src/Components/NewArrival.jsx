import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Your component code


const NewArrival = () => {
    const [data,setData]=useState([]);
    const [isHover,setIsHover]=useState(null);
    const navigate = useNavigate();
    const fetchProduct=async()=>{
        try{
            const data=await fetch("https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_start=0&_end=4");
            const parsedData=await data.json();
            console.log(parsedData);
            setData(parsedData);
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
    <>
        <div className='text-black flex justify-center mt-12 text-2xl bg-[#FFFFFF]'>New Arrivals</div>
        
        <div className='flex gap-4 mx-4 bg-white cursor-pointer'>
            {data?.map((item, index) => (
                <div onClick={()=>handleClick(item.id)} className='h-full w-full mt-10' key={item.id} 
                onMouseEnter={() => setIsHover(index)} 
                onMouseLeave={() => setIsHover(null)}>
                <img src={item.image_1} alt="First Image" 
                    className={`transition duration-300 ease-in-out transform hover:scale-105 ${isHover == index?'hidden':''}`} />
                <img src={item.image_2} alt="Second Image" 
                    className={`transition duration-300 ease-in-out transform hover:scale-105 ${isHover == index?'block':'hidden'}`} />
                    <div><p className='text-black flex justify-center mt-2 hover:cursor-pointer'>{item.name}</p></div>
                    <div><p className='text-black flex justify-center hover:cursor-pointer'>${item.price}</p></div>
                </div>
            ))}
        </div>
    </>
  )
}

export default NewArrival