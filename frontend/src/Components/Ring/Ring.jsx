import React, { useState } from 'react';
import './Ring.css';
import Data from '../../../Data.json';
import Footer from '../Footer/Footer'
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


function Ring() {
  const cardsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Data.filter((item) => item.name === "Ring").slice(indexOfFirstCard, indexOfLastCard);
  const navigate = useNavigate()

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page
  };

  const handleNavigate = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  let dispatch = useDispatch()

  return (
    <div className="ring-box">
      <h1>RINGS</h1>
      <div className='ring'>
        {currentCards.map((filteredItem) => (
          <div key={filteredItem.id} className="card">
            <img src={filteredItem.img} alt={filteredItem.name} />
            <h3>{filteredItem.name}</h3>
            <p>Price: ₹{filteredItem.price}</p>
            <p className='p2'>{filteredItem.about}</p>
            <button className="buy-btn"   onClick={()=>{dispatch(AddItem({name:filteredItem.name,image:filteredItem.img,price:filteredItem.price,id:filteredItem.id,about:filteredItem.about}))
                          alert("Prodcut Added Successfully")}}> <span><FiShoppingCart/></span> Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={prevPage} className="prev-btn">
            Previous
          </button>
        )}
        {Data.filter((item) => item.name === "Ring").length > indexOfLastCard && (
          <button onClick={nextPage} className="next-btn">
            Next
          </button>
        )}
      </div>
      
      <div className='home-btn'>
        <button onClick={()=>handleNavigate()}>Home</button>
      </div>
     
     <div>
      <Footer/>
     </div>
    </div>
  );
}

export default Ring;
