import { RxCross1 } from "react-icons/rx";
import { FaGooglePay } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const AddToCartSidebar = () => {
  const item = useSelector((state) => state.cartItem.AddToCartItem);
  const [totalItem,setTotalItem]=useState(1);
  const [TotalAmount,setTotalAmount]=useState(0);
  useEffect(() => {
    if (item.length > 0) {
      const totalPrice = item.reduce((total, item) => total + item.price, 0);
      setTotalAmount(totalPrice);
    } else {
      setTotalAmount(0);
    }
  }, [item]);
  let len=false;
  if(item.length!==0){
    len=true;
  }
  const handleDecreaseItem=(price)=>{
    if(totalItem===1){
      setTotalItem(1);
    }else{
      setTotalItem(totalItem-1)
      setTotalAmount(TotalAmount-price);
    }
  }
  const handdleIncreaseItem=(price)=>{
    setTotalAmount(TotalAmount+price);
    setTotalItem(totalItem+1)
  }
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-96 min-h-full bg-white text-base-content">
            <label htmlFor="my-drawer-4" className="drawer-button">
              <div className="text-black flex justify-between">
                <div className="text-2xl">Cart</div>
                <RxCross1 className="cursor-pointer size-9 font-bold text-black" />
              </div>
            </label>

            {len ? (<div className="text-black flex flex-col gap-14 justify-center m-3 mt-12">
              <div className="h-48 overflow-auto" style={{scrollbarWidth: 'none', msOverflowStyle: 'none', scrollbarColor: 'transparent transparent'}}>{item.map((item) => {
                return (
                  <>
                    <div className="flex gap-4">
                      <div className="h-36">
                        <img
                          className="h-full"
                          src={item.image_1}
                          alt="image"
                        />
                      </div>
                      <div>
                        <p>{item.name}</p>
                        <div className="py-3">
                          <p>Color:{item.color}</p>
                          <p>Size:{item.size}</p>
                        </div>
                        <div className="flex justify-between py-6">
                          <p className="flex gap-3">
                            <button onClick={()=>handleDecreaseItem(item.price)}>-</button>
                            <p>{totalItem}</p>
                            <button onClick={()=>handdleIncreaseItem(item.price)}>+</button>
                          </p>
                          <p>${item.price}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              </div>
              <div>
                      <div className="flex justify-between">
                        <p>SUBTOTAL</p>
                        <p>${TotalAmount}</p>
                      </div>
                      <div className="py-6">
                        <p className="py-4">
                          Shipping, taxes, and discount codes calculated at
                          checkout.
                        </p>
                        <div className="flex flex-col gap-3">
                          <button className="w-full h-[40px] border-black bg-black text-white">
                            CART
                          </button>
                          <button className="w-full h-[40px] border-black bg-blue-600 text-white">
                            Shop pay
                          </button>
                          <button className="w-full h-[40px] border-black bg-yellow-400 text-black">
                            PayPal
                          </button>
                          <button className="w-full h-[40px] border-black flex justify-center bg-black text-white">
                            <FaGooglePay className="text-5xl items-center" />
                          </button>
                        </div>
                      </div>
                    </div>
            </div>):(<div className="text-black py-7">Cart is empy</div>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSidebar;
