import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    //const navigate = useNavigate();

    useEffect(() =>{
        const email = user.email;
        const url = `http://localhost:5000/orders?email=${email}`;
        fetch(url, {
            method:"GET",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        // fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            console.log(data);
        })
    }, [user])
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>All the Orders</h2>
            {
                orders.map(order => <div style={{padding:'50px',backgroundColor:'gray',marginBottom:'15px'}}>
                    <h2>{order.service}</h2>
                    <h3>{order.email}</h3>
                    <h4>{order.address}</h4>
                    <p>{order.phone}</p>
                </div>)
            }
        </div>
    );
};

export default Order;