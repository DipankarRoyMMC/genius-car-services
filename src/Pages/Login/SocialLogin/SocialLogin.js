import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();


    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'lightGray' }} className='w-50'></div>
                <p className='mt-2 px-4'>Or</p>
                <div style={{ height: '1px', backgroundColor: 'lightGray' }} className='w-50'></div>
            </div>

            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto mb-3'>
                    <img src={google} alt="" />
                    <span className='mx-1'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto mb-3'>
                    <img style={{ height: '30px' }} src={facebook} alt="" />
                    <span className='mx-1'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto mb-3'>
                    <img src={github} alt="" />
                    <span className='mx-1'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;