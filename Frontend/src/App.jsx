import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Search from './components/Search'
import UserAccount from './components/UserAccount'
import WomenCategory from './components/WomenCategory'
import ProductDeatils from './components/ProductDeatils'
import UserRegister from './components/UserRegister'
import UserLogin from './components/UserLogin'
import Cart from './components/Cart'
import AdminLogin from './pages/AdminLogin'
import AdminPage from './pages/AdminPage'
import MenCategory from './components/MenCategory'
import KidCategory from './components/KidCategory'
import ShoesCategory from './pages/ShoesCategory'
import SunglassCategory from './pages/SunglassCategory'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<UserRegister />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/account" element={<UserAccount />}></Route>
        <Route path="/category/women" element={<WomenCategory />}></Route>
        <Route path="/productDetails/:id" element={<ProductDeatils />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        <Route path='/category/men' element={<MenCategory/>}></Route>
        <Route path='/category/kids' element={<KidCategory/>}></Route>
        <Route path='/category/shoes' element={<ShoesCategory/>}></Route>
        <Route path='/category/sunglass' element={<SunglassCategory/>}></Route>
      </Routes>
    </div>
  )
}

export default App

