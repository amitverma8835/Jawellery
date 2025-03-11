import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import {useDispatch,useSelector } from 'react-redux' 

function Nav() {

  let dispatch = useDispatch()

  let items = useSelector(state=>state)
  console.log(items)
  return (
    <div className="nav">
      <div className="app-logo">
        <h1>BLINGJAWELERY</h1>
      </div>

      <div className="nav-cart">
        <Link to={'/cart'}>
          <div className="cart-box">
            <LuShoppingCart className="cart-icon" />
            <span className="cart-count">{items.cart.length}</span> 
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
