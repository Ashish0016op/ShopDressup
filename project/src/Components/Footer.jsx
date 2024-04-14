
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF,FaLinkedinIn,FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
    const QuickLinks=[
        "Start a Return",
        "Shipping + Returns",
        "Promos + Discounts",
        "Size Guide",
        "FAQS",
        "Contact Us",
        "Gifts Cards",
        "Privacy Policy",
        "Terms of Services",
        "Refund Policy"
    ];
    const AboutUs=[
        "Our Story + Mission",
        "Locations",
        "Collaborations",
        "Job Openings",
        "Interns",
        "Blog"
    ]
  return (
    <div className='bg-[#F7DEE7]'>
        <div className='flex justify-between mx-11'>
            <div className='py-14'>
                <h1 className="text-4xl text-black cursor-pointer">Dress Up</h1>
                <div><p className='text-black text-lg my-4'>QUICK LINKS</p></div>
                <div className='text-black'>
                    {QuickLinks.map((item,index)=>{
                        return (
                            <div className='text-sm py-1 cursor-pointer hover:border-b-2' key={index}>{item}</div>
                        )
                    })}
                </div>
            </div>
            <div className='py-28'>
                <div><p className='text-black text-lg my-4'>About Us</p></div>
                <div className='text-black'>
                    {AboutUs.map((item,index)=>{
                        return (
                            <div key={index} className='text-sm py-1 cursor-pointer hover:border-b-2'>{item}</div>
                        )
                    })}
                </div>
            </div>
            <div className='text-black py-32'>
                    <div className='py-2'>
                        <p>SIGN UP AND SAVE</p>
                    </div>
                    <div className='w-[200px] py-2'>
                        <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    </div>
                    <div style={{borderBottom:"2px solid"}}>
                        <input className='bg-[#F7DEE7] border-none py-2' placeholder='Enter your email' type='text'/>
                        <button className="text-3xl items-center"><MdEmail/></button>
                    </div>
                    <div className="text-3xl py-4 flex gap-3">
                        <Link to="https://www.instagram.com/ShopDressUp/"><RxInstagramLogo/></Link>
                        <Link to="https://www.facebook.com/ShopDressUp"><FaFacebookF/></Link>
                        <FaLinkedinIn/>
                        <Link to="https://www.tiktok.com/@shopdressup"><FaTiktok/></Link>
                    </div>
            </div>
        </div>
        <div>
        <p className="flex justify-center py-16 text-black">© 2024 Dress Up</p>
        </div>
    </div>
  )
}

export default Footer