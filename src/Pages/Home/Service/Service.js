import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, des, price } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className="service-info">
                <h2 className='service-name'>{name}</h2>
                <p>Price: ${price}</p>
                <p>Des: {des}</p>
                <button className='btn btn-primary' onClick={() => navigateToServiceDetail(id)}>Book {name}</button>
            </div>
        </div>
    );
};

export default Service;