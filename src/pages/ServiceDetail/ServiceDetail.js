import React from 'react';
import {Link, useParams} from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';


const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);

    
    return (
        <div>
            <h2>You are about to book:{service.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;