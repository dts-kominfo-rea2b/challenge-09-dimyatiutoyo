// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = ({ data }) => {
    return (
        <li key={data.name} className='contact-item'>
            <div className='contact-container'>
                <img className='image-container' src={data.photo} alt={data.name} />
                <div className='contact-details'>
                    <h3 className='contact-name'>{data.name}</h3>
                    <p className='contact-phone'>{data.phone}</p>
                    <p className='contact-email'>{data.email}</p>
                </div>
            </div>
            <div className="call-button">
                <button className='btn btn-link'>CALL</button>
            </div>
        </li>
    )
}

export default Contact;