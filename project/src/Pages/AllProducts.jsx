import React from 'react'
import NavBar from '../Components/NavBar'
import Sidebar from '../Components/Sidebar'
import CardItem from '../Components/CardItem'
import { Link } from 'react-router-dom'
import NewArrival from '../Components/NewArrival'
import Footer from '../Components/Footer'

const AllProducts = () => {
  return (
    <div className='bg-white'>
        <NavBar/>
        <div><p className='text-black text-2xl flex justify-center py-11'>New Boutique Dresses For Women</p></div>
        <div className='flex'>
            <Sidebar/>
            <CardItem/>
        </div>
        <div>
          <p className='text-black text-3xl flex justify-center'>New Accessories | Starting at $8</p>
          <div className='flex text-black justify-center py-3'><Link to="/collections"><button className='border-black p-2 border-solid border-2'>View All</button></Link></div> 
        </div>
        <NewArrival/>
        <Footer/>
    </div>
  )
}

export default AllProducts