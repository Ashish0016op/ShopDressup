import {useState } from "react";
import {useSelector } from "react-redux";
import NavBarSearchField from "./NavBarSearch";
import { NavLink } from "react-router-dom";
const data1=[
    {
      "New Arrivals":[
      "AllNew",
      "New Tops",
      "New Dresses",
      "New Rompers & Junsuits",
      "New Accessories",
    ]},
    {
      "SHOP BY COLLECTIONS":[
        "Made By You Look Collection",
        "In Your Happy Place Collection",
        "Pursuit Of Happiness Collection",
        "Never Looking Back Collection",
        "Du Deals","Du Exclusives"
      ]
    },
    {
      "":[
        "LAST CALLS",
        "GIFT CARDS"
      ]
    }
    ];
const BestsellersData=[

]
const DuExcData=[
  {
    "HOLLEY GABRIELLE X DRESS UP":[]
  },
  {
    "GAME DAY":[
      "Atlanta",
      "UGA"
    ]
  },
  {
    "CITY CUSTOMS":[
      "Destin",
      "Nashville",
      "Charleston",
      "Greenville",
      "Huntsville",
      "Savannah",
      "Dahlonega",
      "Suwanee",
      "Gainesville",
      "Woodstock",
      "Alpharetta",
      "West Cobb"
    ]
  },
  {
    "CUSTOM ACCESSORIES":[
      "Custom Hats",
      "Stickers",
      "Buttons",
      "Koozies",
    ]
  },
  {
    "HOME DECOR":[
      "Pillows",
      "Towels"
    ]
  }
]
const ClothData=[
  {
    "TOPS":[
      "All Tops",
      "Bodysuits",
      "Cardigans & Kimonos",
      "Casual Tops",
      "Crop Tops",
      "Graphic Tees",
      "Outerwear",
      "Sweaters & Knits",
      "Sweatshirts & Hoodies",
      "Oversized Sweaters",
      "Shackets",
      "Shirts & Blouses",
      "Tanks",
      "Tees"
    ]
  },
  {
    "BOTTOMS":[
      "All Bottoms",
      "Pants",
      "Denim",
      "Skirts",
      "Cargos",
      "Shorts",
      "Leggings"
    ]
  },
  {
    "DRESSES":[
      "All Dresses",
      "Mini Dresses",
      "Midi Dresses",
      "Maxi Dresses",
      "Rompers & Jumpsuits",
      "Casual Dresses",
      "Floral Dresses",
      "Little Black Dresses"
    ]
  },
  {
    "DENIM":[
      "All Denim",
      "Jeans",
      "Jackets",
      "Shorts"
    ]
  },
  {
    "EXTENDED SIZES":[
      "Dresses",
      "Tops",
      "Bottoms"
    ]
  },
  {
    "STYLES FOR YOU":[
      "DU Deals",
      "Valentine's Day Looks",
      "Sweater Dresses",
      "Bold + Bright",
      "Loungewear",
      "Extended Sizes",
      "Matching Sets",
      "The Basics Shop",
      "Restocks"
    ]
  }
]
const DressesData=[
    {"SHOP BY LENGTH":[
      "Mini Dresses",
      "Midi Dresses",
      "Maxi Dresses"
    ]
    },
    {"SHOP BY STYLE":[
      "Casual Dresses",
      "Floral Dresses",
      "Little Black Dresses",
      "Long Sleeve Dresses",
      "Rompers & Jumpsuits",
      "Babydoll Dresses"
    ]
  },
{"SHOP BY TREND":[
"Sweater Dresses",
"Printed Dresses",
"Party Dresses",
"Solid Dresses"]},
{"SHOP BY COLOR":[
"Black Dresses",
"White Dresses",
"Pink Dresses",
"Purple Dresses",
"Blue Dresses",
"Red Dresses",
"Green Dresses",
"Brown Dresses",
"Yellow Dresses",
"Rust Dresses"]}
]
const ShoesData=[
  {"SHOP BY STYLE":[
  "Boots & Booties",
  "Sneakers",
  "Heels & Wedges",
  "Flats",
  "Sandals"]},
  {"SHOP BY TREND":[
  "Western Boots & Booties",
  "Cozy Shoes",
  "Sale Shoes"]}
]
const AccessoriesData=[
  {  "ALL ACCESSORIES":[
  "Sunglasses",
  "Hair Accessories",
  "Handbags",
  "Hats",
  "Bandeaus & Bralettes",
  "Ponchos & Shawls"]},
{"JEWELRY":[
"Necklaces",
"Earrings",
"Bracelets",
"Rings"]}
]
const SellData=[
  {"SHOP BY CATEGORY":[
  "New Markdowns",
  "Sale Dresses",
  "Sale Rompers & Jumpsuits",
  "Sale Tops",
  "Sale Bottoms",
  "Sale Shoes",
  "Sale Jewelry",
  "Last Call",
  "$16 Basics"]},
  {"SHOP BY PRICE":[
  "Under $29",
  'Under $20',
  "Under $15",
  "Under $10",
  'Under $5']}
]

const NavBar = () => {
  
  const textField = useSelector((state) => state.search.SearchField);
  const [isNewArrivalOpen, setIsNewArrivalOpen] = useState(false);
  const [isDuOpen,setIsDuOpen]=useState(false);
  const [isClothOpen,setIsClothOpen]=useState(false);
  const [isDressOpen,setIsDressOpen]=useState(false);
  const [isShoesOpen,setIsShoesOpen]=useState(false);
  const [isAccesOpen,setIsAccesOpen]=useState(false);
  const [isSellDataOpen,setIsSellDataOpen]=useState(false);
  
  
  return (
    <div>
      <div className="bg-pink-300 h-[40px] gap-1 text-white text-center flex flex-row justify-center">
        <p className="animate-bounce h-11">BUY ONLINE + PICK UP IN STORE</p>
      </div>
      <NavBarSearchField />
      {!textField ? (
        <div className="bg-white items-center justify-center text-center text-black py-4">
          <ul className="flex flex-row items-center justify-center gap-9" style={{ width: '100%' }}>
            <li >
                <NavLink className="cursor-pointer hover:border-b-4">Valentine's Day Collection</NavLink>
            </li>
            <li >
              <NavLink onMouseEnter={()=>setIsNewArrivalOpen(true)} onMouseLeave={()=>setIsNewArrivalOpen(false)} 
                className="cursor-pointer hover:border-b-4 "
              >
                New Arrivals
              </NavLink>
              {isNewArrivalOpen && 
                <div onMouseEnter={()=>setIsNewArrivalOpen(true)} onMouseLeave={()=>setIsNewArrivalOpen(false)}  className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
                {data1.map((obj, index) => (
                  Object.entries(obj).map(([key, value]) => (
                    <div key={index}>
                      <div><h3>{key}</h3></div>
                      <div className="flex flex-col mx-7 py-4">
                        {value.map((item, idx) => (
                          <div className="py-2" key={idx}>
                            <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  ))
                ))}
              </div>
              }
            </li>
            <li>
              <NavLink onMouseEnter={()=>setIsDuOpen(true)} onMouseLeave={()=>setIsDuOpen(false)} className="cursor-pointer hover:border-b-4">DU Exclusive</NavLink>
              {isDuOpen && 
                <div onMouseEnter={()=>setIsDuOpen(true)} onMouseLeave={()=>setIsDuOpen(false)}  className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
                {DuExcData.map((obj, index) => (
                  Object.entries(obj).map(([key, value]) => (
                    <div key={index}>
                      <div><h3>{key}</h3></div>
                      <div className="flex flex-col mx-7 py-4">
                        {value.map((item, idx) => (
                          <div className="py-2" key={idx}>
                            <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  ))
                ))}
              </div>
              }
              
            </li>
            <li >
              <NavLink onMouseEnter={()=>setIsClothOpen(true)}
                onMouseLeave={()=>setIsClothOpen(false)}
                className="cursor-pointer hover:border-b-4"
              >
                Clothing
              </NavLink>
              {isClothOpen && 
                <div onMouseEnter={()=>setIsClothOpen(true)} onMouseLeave={()=>setIsClothOpen(false)}  className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
                {ClothData.map((obj, index) => (
                  Object.entries(obj).map(([key, value]) => (
                    <div key={index}>
                      <div><h3>{key}</h3></div>
                      <div className="flex flex-col mx-7 py-4">
                        {value.map((item, idx) => (
                          <div className="py-2" key={idx}>
                            <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  ))
                ))}
              </div>              
              }
            </li>
            <li >
              <NavLink onMouseEnter={()=>setIsDressOpen(true)}
                onMouseLeave={()=>setIsDressOpen(false)}
                className="cursor-pointer hover:border-b-4"
              >
                Dresses
              </NavLink>
              {isDressOpen && 
              <div onMouseEnter={()=>setIsDressOpen(true)} onMouseLeave={()=>setIsDressOpen(false)}  className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
              {DressesData.map((obj, index) => (
                Object.entries(obj).map(([key, value]) => (
                  <div key={index}>
                    <div><h3>{key}</h3></div>
                    <div className="flex flex-col mx-7 py-4">
                      {value.map((item, idx) => (
                        <div className="py-2" key={idx}>
                          <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                ))
              ))}
            </div> 
              }
            </li>
            <li >
              <NavLink onMouseEnter={()=>setIsShoesOpen(true)}
                onMouseLeave={()=>setIsShoesOpen(false)}
                className="cursor-pointer hover:border-b-4"
              >
                Shoes
              </NavLink>
              {isShoesOpen && 
              <div onMouseEnter={()=>setIsShoesOpen(true)} onMouseLeave={()=>setIsShoesOpen(false)}  className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
              {ShoesData.map((obj, index) => (
                Object.entries(obj).map(([key, value]) => (
                  <div key={index}>
                    <div><h3>{key}</h3></div>
                    <div className="flex flex-col mx-7 py-4">
                      {value.map((item, idx) => (
                        <div className="py-2" key={idx}>
                          <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                ))
              ))}
            </div>
              }
            </li>
            <li >
              <NavLink onMouseEnter={()=>setIsAccesOpen(true)}
                onMouseLeave={()=>setIsAccesOpen(false)}
                className="cursor-pointer hover:border-b-4"
              >
                Accessories
              </NavLink>
              {isAccesOpen && 
              <div onMouseEnter={()=>setIsAccesOpen(true)} onMouseLeave={()=>setIsAccesOpen(false)}  className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
              {AccessoriesData.map((obj, index) => (
                Object.entries(obj).map(([key, value]) => (
                  <div key={index}>
                    <div><h3>{key}</h3></div>
                    <div className="flex flex-col mx-7 py-4">
                      {value.map((item, idx) => (
                        <div className="py-2" key={idx}>
                          <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                ))
              ))}
            </div>
              }
            </li>
            <li >
              <NavLink onMouseEnter={()=>setIsSellDataOpen(true)}
                onMouseLeave={()=>setIsSellDataOpen(false)}
                className="cursor-pointer hover:border-b-4"
              >
                Sell
              </NavLink>
              {isSellDataOpen && 
              <div onMouseEnter={()=>setIsSellDataOpen(true)}
              onMouseLeave={()=>setIsSellDataOpen(false)} className="flex justify-center absolute bg-white w-[98%] left-[13px] pt-4">
              {SellData.map((obj, index) => (
                Object.entries(obj).map(([key, value]) => (
                  <div key={index}>
                    <div><h3>{key}</h3></div>
                    <div className="flex flex-col mx-7 py-4">
                      {value.map((item, idx) => (
                        <div className="py-2" key={idx}>
                          <p className="hover:cursor-pointer hover:border-b-2">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                ))
              ))}
            </div>
              }
              
            </li>
           
          </ul>
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default NavBar;
