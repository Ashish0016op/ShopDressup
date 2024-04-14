import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Product from './Pages/Product'
import AllProducts from './Pages/AllProducts'
import { useRef } from 'react';
import Login from './Pages/Login'

function App() {
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      document.body.classList.add("overflow-auto");
    }
  };

  return (
    <div onClick={handleClickOutside} ref={containerRef}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections" element={<AllProducts/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
