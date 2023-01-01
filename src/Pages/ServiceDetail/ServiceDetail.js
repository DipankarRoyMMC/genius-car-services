import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>This is Service Detail: {serviceId}</h1>
            <div className="w-50 mx-auto text-center">
                <Link to='/checkout' className='btn btn-primary'>Process Checkout</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;