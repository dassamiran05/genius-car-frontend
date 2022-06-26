import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [token] = useToken(user);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const handleSubmit = async event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //const agree = event.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name});
        console.log('Updated profile');
        // navigate('/home');

    }

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(token){
        navigate('/home');
    }
    return (
        <div className="container w-50 mx-auto">
            <h2 className="text-primary text-center my-3">Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="name" placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className={agree ? 'text-primary' : 'text-danger'} label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary w-50 d-block mx-auto mb-2" type="submit" disabled={!agree}>
                    Register
                </Button>
            </Form>
            <p>Already have an account? <span className='text-primary pe-auto' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;