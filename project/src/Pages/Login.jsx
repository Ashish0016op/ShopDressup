import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const Login = () => {
  return (
    <div className='bg-white'>
        <NavBar/>
        <div className='flex justify-center py-32 text-black'>
            <div className='w-80'>
                <div className='flex justify-center font-semibold pb-7 text-2xl '>Login</div>
                <form className='flex flex-col'>
                    <label htmlFor='email'>EMAIL</label><br/>
                    <input type='email' className='bg-white border-black border-x border-y h-9 border-solid'/><br/>
                    <div className='flex justify-between'>
                    <label htmlFor='password'>PASSWORD</label>
                    <p className='cursor-pointer'>Forgot password?</p>
                    </div>
                    <br/>
                    <input type='password' className='bg-white border-black border-x border-y h-9 border-solid'/><br/>
                    <button className='flex justify-center'>SIGN IN</button>
                </form>
                <div className='flex justify-center py-5'>
                    <button>Create account</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login