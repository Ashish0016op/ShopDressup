import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const Sidebar = () => {
  const [isUpOrDow_Avail, setIsUpOrDow_Avail] = useState(false);
  const [isUpOrDow_Pr, setIsUpOrDow_Pr] = useState(false);
  const [isUpOrDow_Co, setIsUpOrDow_Co] = useState(false);
  const [isUpOrDow_Si, setIsUpOrDow_Si] = useState(false);
  return (
    <div className="bg-white w-80 h-[100vh]">
      <div className="text-black py-3 mx-11 w-[130px]">
        <div
          className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => (isUpOrDow_Avail ? setIsUpOrDow_Avail(false) : setIsUpOrDow_Avail(true))}
        >
          <p>AVAILABILITY</p>
          {isUpOrDow_Avail ? <FaChevronUp /> : <FaAngleDown />}
        </div>
        <div>
            {isUpOrDow_Avail && <div>
                <div className="flex gap-2">
                    <input type="checkbox" className="bg-white text-white"/>
                    <p>In stock (50)</p>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="bg-white text-white"/>
                    <p>Out of stock (6)</p>
                </div>
                </div>}
        </div>
        <div className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => (isUpOrDow_Pr ? setIsUpOrDow_Pr(false) : setIsUpOrDow_Pr(true))}>
          <p>PRICE</p>
          {isUpOrDow_Pr ? <FaChevronUp /> : <FaAngleDown />}
        </div>
        <div>
            {isUpOrDow_Pr && <div className="">
                <div className="flex justify-between">
                    <p>$10.00</p>
                    <p>$30.00</p>
                </div>
                <RangeSlider />

                </div>}
        </div>
        <div className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => (isUpOrDow_Co ? setIsUpOrDow_Co(false) : setIsUpOrDow_Co(true))}>
          <p>COLOR</p>
          {isUpOrDow_Co ? <FaChevronUp /> : <FaAngleDown />}
        </div>
        <div>
            {
                isUpOrDow_Co &&
                <div className="flex gap-2">
                    <div className="w-[33px] h-[33px] cursor-pointer rounded-full bg-green-600"></div>
                    <div className="w-[33px] h-[33px] cursor-pointer rounded-full bg-black"></div>
                    <div className="w-[33px] h-[33px] cursor-pointer rounded-full bg-orange-600"></div>
                    <div className="w-[33px] h-[33px] cursor-pointer rounded-full bg-red-600 "></div>
                </div>
            }
        </div>
        <div className="py-3 flex justify-between items-center cursor-pointer"
          onClick={() => (isUpOrDow_Si ? setIsUpOrDow_Si(false) : setIsUpOrDow_Si(true))}>
          <p>SIZE</p>
          {isUpOrDow_Si ? <FaChevronUp /> : <FaAngleDown />}
        </div>
        <div>
            {isUpOrDow_Si && 
            <div>
                <div className="flex gap-2">
                    <input type="checkbox" className="bg-white text-white"/>
                    <p>Small</p>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="bg-white text-white"/>
                    <p>Medium</p>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" className="bg-white text-white"/>
                    <p>Large</p>
                </div>
                </div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
