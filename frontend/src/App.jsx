import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Ring from './Components/Ring/Ring'
import Neckless from './Components/Neckless/Neckless'
import Bracelet from './Components/Bracelet/Bracelet'
import All from './Components/All/All'
import CartCard from './Components/Cart/Cart'
import Form from './Components/Form/Form'
import OrderForm from './Components/OrderForm/OrderForm';
function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/ring' element={<Ring/>}/>
      <Route path='/neckless' element={<Neckless/>}/> 
      <Route path='/bracelet' element={<Bracelet/>}/> 
      <Route path='/all-product' element={<All/>}/> 
      <Route path='/cart' element={<CartCard/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/order-form' element={<OrderForm/>}/>


       
 



 

      




    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
