import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorElement =<p className='text-danger'>Error: {error.message}</p>;
    }

    if(user){
        // navigate('/home');
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50' style={{height:'1px'}}></div>
                
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-primary d-block mx-auto w-50 mb-2">Google Sign in</button>
                <button className="btn btn-primary d-block mx-auto w-50">Facebook Sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;