// import React from "react";
// import { useSelector } from "react-redux";

// // const DropDownMenu = () => {
// //   const items=useSelector(state=>state.menu.MenuDetails);
// //   return (
// //     <div className="bg-white w-[500px] h-24">
// //       <ul>
// //         {items.map((obj, index) => (
// //           Object.entries(obj).map(([key, value]) => (
// //             <li className="" key={index}>
// //               <div>{key}</div>
// //               <ul>
// //                 {value.map((item, idx) => (
// //                   <li key={idx}>{item}</li>
// //                 ))}
// //               </ul>
// //             </li>
// //           ))
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };
// const DropDownMenu=()=>{
//   const items=useSelector(state=>state.menu.MenuDetails);
  
//   return(
//     // <div className="flex justify-center fixed bg-white w-[98%] left-[13px]">
//     //   <div>
//     //     <div><h3>New Arrivals</h3></div>
//     //     <div>
//     //       <p>New Tops</p>
//     //       <p>New Dresses</p>
//     //       <p>New Bottoms</p>
//     //       <p>New Rompers & Jumpsuits</p>
//     //       <p>New Accessories</p>
//     //     </div>
//     //   </div>
//     //   <div>
//     //     <div>
//     //       <h3>SHOP BY COLLECTION</h3>
//     //     </div>
//     //     <p>Pursuit Of Paradise Collection</p>
//     //     <p>Feeling Bold Collection</p>
//     //     <p>It's All In The Details Collection</p>
//     //     <p>Living The Dream Collection</p>
//     //     <p>Girl's Night Out Collection</p>
//     //     <p>Vacation Collection</p>
//     //     <p>DU Deals</p>
//     //     <p>DU Exclusive</p>

//     //   </div>
//     //   <div>
//     //     <h3>LAST CALL</h3>
//     //     <h3>GIFT CARDS</h3>
//     //   </div>
//     // </div>

//   )
// }

// export default DropDownMenu;






import { useState } from "react";
import { useSelector } from "react-redux";

const DropDownMenu=()=>{
  const items=useSelector(state=>state.menu.MenuDetails);
  
  return(
    <div className="flex justify-center fixed bg-yellow-300 w-[98%] left-[13px]">
    {items.map((obj, index) => (
      Object.entries(obj).map(([key, value]) => (
        <div key={index}>
          <div><h3>{key}</h3></div>
          <div>
            {value.map((item, idx) => (
              <div key={idx}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          
        </div>
      ))
    ))}
  </div>

  )
}

export default DropDownMenu;
