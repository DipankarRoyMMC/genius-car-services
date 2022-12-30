import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, des, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="service-info">
                <h2 className='service-name'>{name}</h2>
                <p>Price: ${price}</p>
                <p>Des: {des}</p>
                <button>Book {name}</button>
            </div>
        </div>
    );
};

export default Service;