import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name:'samiran das',
    //     email:'dassamiran05@gmail.com',
    //     address:'Baruipur',
    //     phone:'9064672909'
    // });

    // const handleOnchange = event =>{
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    // }


    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            service:service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.phone.value
        }
        const url = 'http://localhost:5000/order/';
        fetch(url, {
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast('Order placed successfully');
            event.target.reset();
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user.displayName} readOnly type="text" name="name" placeholder='Your Name' required disabled/><br />
                <input className='w-100 mb-2' value={user.email} type="email" readOnly name="email" placeholder='Your Email' required disabled/><br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' required/><br />
                <textarea className='w-100 mb-2' name="address" placeholder='Your Address' autoComplete='off' required/><br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='Your Phone' autoComplete='off' required/><br />
                <input className='btn btn-primary d-block' type="submit" value="Place Order" /><br />
            </form>
        </div>
    );
};

export default Checkout;