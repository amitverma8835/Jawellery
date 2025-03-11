import React, { useState } from 'react';
import './OrderForm.css';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // 🔥 Form ke default submit behavior ko rok raha hai

        // ✅ Form validation
        if (!name.trim() || !phone.trim() || !text.trim()) {
            alert("Please fill all the fields!");
            return;
        }

        if (!/^\d{10}$/.test(phone)) { 
            alert("Please enter a valid 10-digit phone number!");
            return;
        }

        alert(`Order Placed Successfully ${name}`);
        navigate('/');
        window.location.reload();
    };

    return (
        <div className='order-form'>
            <form onSubmit={handleSubmit}>  {/* ✅ Form ke submit event ko handle kar rahe */}
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="contact">Phone Number</label>
                <input type="text" name="contact" placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />

                <label htmlFor="address">Address</label>
                <textarea name="address" placeholder='Address' value={text} onChange={(e) => setText(e.target.value)} />

                <button type='submit'>Place Order</button> {/* ✅ Correct way to submit */}
            </form>
        </div>
    );
}

export default OrderForm;
