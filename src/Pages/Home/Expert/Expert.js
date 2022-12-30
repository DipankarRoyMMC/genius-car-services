import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-4 col col-md-6 col-lg-4'>
            <div className="card border-0 shadow ">
                <img src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <button className='btn btn-primary'>See details</button>
                </div>
            </div>
        </div>

    );
};

export default Expert;