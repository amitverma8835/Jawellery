import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link,  useNavigate} from 'react-router-dom'





import './Footer.css'

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className='footer'>
      <div className="box1">
        <table>
          <tr>
            <th>BRANCHES</th>
          </tr>
          <tr>
            <td>Ranchi</td>
          </tr>
          <tr>
            <td>Hazaribagh</td>
          </tr>
          <tr>
            <td>Koderma</td>
          </tr>
        </table>

       <table>
        <tr>
          <th>CONTACT</th>
        </tr>

        <tr>
          <td> <IoCallSharp/>+917476764674</td>
        </tr>
        <tr>
        <td><MdEmail/>jawellery@gmail.com</td>
        </tr>
        <tr>            
        <td><IoCallSharp/>+676736476878</td>
        </tr>
        <tr>
          <td onClick={()=>navigate('/form')}>Request Call Form</td>
        </tr>
       </table>

      </div>

      <div className="box2">
      <div className="social">
        <span><BsInstagram/></span>
        <span><FaFacebookSquare/></span>
        <span><FaTwitterSquare/></span>
        <span><FaYoutube/></span>
      </div>

      <div className="f-links">
        <Link onClick={()=>handleNavigate()} to={'/ring'}>Ring</Link>
        <Link  onClick={()=>handleNavigate()} to={'/bracelet'}>Bracelet</Link>
        <Link  onClick={()=>handleNavigate()} to={'/neckless'}>Neckless</Link>
       

      </div>

      </div>
    </div>
  )
}

export default Footer
