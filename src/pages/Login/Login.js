import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user);

      const [updatePassword, updating] = useUpdatePassword(auth);

      const location = useLocation();

      let from = location.state?.from?.pathname || "/";
      let errorElement;

    const emailRef = useRef('');
    const passRef = useRef('');


    const navigate = useNavigate();

    const handleSubmit = async e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await signInWithEmailAndPassword(email, password);
        // const {data} = await axios.post('https://ancient-citadel-53678.herokuapp.com/login', {email});
        // console.log(data);
        // localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true });


        //Using fetch method
        // fetch('https://ancient-citadel-53678.herokuapp.com/login',{
        //     method:'POST',
        //     headers:{
        //         'content-type' : 'application/json'
        //     },
        //     body:JSON.stringify({email, password})
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     if(data.success){
        //         localStorage.setItem('accessToken', data.accessToken);
        //         navigate(from, { replace: true });
        //     }
        //     console.log(data); 
        // })
    }

    const navigateRegister = () =>{
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await updatePassword(email);
             toast('Sent Email');
        }else{
             toast('Enter your Email');
        }
    }

    if(token){
        navigate(from, { replace: true });
    }


    if (error) {
        errorElement =<p className='text-danger'>Error: {error.message}</p>;
    }
    return (
        <div className="container w-50 mx-auto">
            <h2 className="text-primary text-center my-3">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef}type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>New to Genius Car? <span className='text-danger pe-auto' onClick={navigateRegister}>Please Register</span></p>
            <p className='text-center'>Forget Password?? <span className='text-primary pe-auto' onClick={resetPassword}>Reset Password</span></p>
            <ToastContainer/>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;