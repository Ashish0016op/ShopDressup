import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { removeSetSerach, setSearch } from "../Redux/SearchSlice";

import { Link } from "react-router-dom";
import AddToCartSidebar from "./AddToCartSidebar";
const NavBarSearchField = () => {
  const dispatch = useDispatch();
  const OpenSearch = () => {
    dispatch(setSearch(true));
  };
  const closeSearch = () => {
    dispatch(removeSetSerach(false));
  };
  const textField = useSelector((state) => state.search.SearchField);

  return (
    <div>
      <Link to="/">
        <div>
          <h1 className="text-4xl text-black cursor-pointer flex justify-center mt-3">
            Dress Up
          </h1>
        </div>
      </Link>
      <div className="flex flex-row pt-10 justify-between mx-3 bg-white ">
        {textField ? (
          <div className="flex flex-row w-full bg-white text-black h-20 text-center items-center">
            <IoSearchOutline className="size-9 text-black" />
            <input
              type="text"
              className="w-full outline-none bg-white"
              placeholder="search our store"
            />
            <RxCross2 onClick={closeSearch} className="size-9 cursor-pointer" />
          </div>
        ) : (
          <IoSearchOutline
            className="size-9 cursor-pointer"
            onClick={OpenSearch}
          />
        )}
        {textField ? (
          " "
        ) : (
          <div className="flex flex-row items-center">
            <div className="flex flex-row gap-7">
              <Link to="/login"><CgProfile className="cursor-pointer size-9 font-bold text-black" /></Link>

              <label
                htmlFor="my-drawer-4"
                className="drawer-button"
              >
                <FaShoppingCart className="cursor-pointer size-9 font-bold text-black" />
              </label>
            </div>
          </div>
        )}
      </div>
      <AddToCartSidebar/>
    </div>
  );
};

export default NavBarSearchField;
