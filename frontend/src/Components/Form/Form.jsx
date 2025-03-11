import React, { useState } from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom';

function Form() {
  const[name,setName] = useState('');
  const [contact,setContact] = useState('');
  const [text,setText] = useState('')
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    alert(`Your form has been submitted ${name}`)
  }
  return (
    <div className='contact'>
      <form action="https://formspree.io/f/xqaedpaq" method='post'>
      <h1>Request Call</h1>
        <input type="text" name="name" id="" placeholder='Enter Your Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="phone" id="" placeholder='Enter Your Phone Number' required value={contact} onChange={(e)=>setContact(e.target.value)}/>
        <textarea name="message" id="" placeholder='message' required value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <button type='submit' onClick={()=>handleSubmit()}>Submit</button>
      </form>

      <button onClick={()=>navigate('/')}>Go Back</button>

    </div>
  )
}

export default Form
