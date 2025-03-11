import React, { useState } from 'react';
import Data from '../../../Data.json';
import Footer from '../Footer/Footer';
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


function Bracelet() {
  const cardsPerPage = 4; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination boundaries based on currentPage
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Data.filter((item) => item.name === "Bracelet").slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page
  };
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  

  let dispatch = useDispatch();


  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing page
  };

  return (
    <div className="ring-box">
      <h1>BRACELETES</h1>
      <div className='ring'>
        {currentCards.map((filteredItem) => (
          <div key={filteredItem.id} className="card">
            <img src={filteredItem.img} alt={filteredItem.name} />
            <h3>{filteredItem.name}</h3>
            <p>Price: ₹{filteredItem.price}</p>
            <p className='p2'>{filteredItem.about}</p>
            <button className="buy-btn" onClick={()=>{dispatch(AddItem({name:filteredItem.name,image:filteredItem.img,price:filteredItem.price,id:filteredItem.id,about:filteredItem.about}))
                          alert("Prodcut Added Successfully")}}><span><FiShoppingCart/></span> Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={prevPage} className="prev-btn">
            Previous
          </button>
        )}
        {Data.filter((item) => item.name === "Bracelet").length > indexOfLastCard && (
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

export default Bracelet;
