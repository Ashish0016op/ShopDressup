import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-20 gap-5 mx-4 flex justify-center bg-[#FFFFFF]">
      <Link to="/collections">
        <div className="relative hover:cursor-pointer w-[270px]">
          <img
            className="transition ease-in-out delay-110 hover:-translate-y-0 hover:scale-105 duration-300"
            src="https://shopdressup.com/cdn/shop/files/shopdressup_floral_mini_dress-2_360x.jpg?v=1712512935"
            alt="image"
          />
          <p className="text-[#FFFFFF] text-xl font-semibold absolute top-[50%] left-0 w-full text-center">
            SHOP NEW
          </p>
        </div>
      </Link>
      <Link to="/collections">
        <div className="relative hover:cursor-pointer w-[270px]">
          <img
            className="transition ease-in-out delay-110 hover:-translate-y-0 hover:scale-105 duration-300"
            src="https://shopdressup.com/cdn/shop/collections/7F8E20C3-F9E3-4419-8EDA-0D582FDF1BBF_360x.jpg?v=1712411553"
            alt="image"
          />
          <p className="text-[#FFFFFF] text-xl font-semibold absolute top-[50%] left-0 w-full text-center">
            SPRING TOPS
          </p>
        </div>
      </Link>
      <Link to="/collections">
        <div className="relative hover:cursor-pointer w-[270px]">
          <img
            className="transition ease-in-out delay-110 hover:-translate-y-0 hover:scale-105 duration-300"
            src="https://shopdressup.com/cdn/shop/collections/1.27_dresses_360x.jpg?v=1712411621"
            alt="image"
          />
          <p className="text-[#FFFFFF] text-xl font-semibold absolute top-[50%] left-0 w-full text-center">
            NEW DRESSES
          </p>
        </div>
      </Link>
      <Link to="/collections">
        <div className="relative hover:cursor-pointer w-[270px]">
          <img
            className="transition ease-in-out delay-110 hover:-translate-y-0 hover:scale-105 duration-300"
            src="https://shopdressup.com/cdn/shop/collections/IMG_7754_360x.jpg?v=1712411799"
            alt="image"
          />
          <p className="text-[#FFFFFF] text-xl font-semibold absolute top-[50%] left-0 w-full text-center">
            SPRING DENIM
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Category;
