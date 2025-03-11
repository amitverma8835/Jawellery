import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import './CartCard.css'
import { useDispatch } from "react-redux";
import { RemoveItem } from '../../redux/cartSlice';



function CartCard({name,price,image,id,about}) {
  let dispatch = useDispatch()
  return (
    <div className='Cartcard'>
       <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
                <span>Product Name : {name}</span>
                <span>Rs : {price}₹</span>
                <span>About : {about}</span>
        </div>

       </div>
       <div className="right-card">
        <button onClick={()=>{
          dispatch(RemoveItem(id))
          alert("Prodcut Removed Successfully")
        }}>Remove<RiDeleteBin5Fill/> </button>
       </div>
      
    </div>
  )
}

export default CartCard
