import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState();
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        console.log('user info', user)
    }
    const handleFormRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('update profile');
        navigate('/home');
    }

    return (
        <div className='regsiter-form'>
            <h1 className='register-title'>Register Here.</h1>
            <form onSubmit={handleFormRegister} className='form-register'>
                <input type="text" name='name' placeholder="Your Name" />
                <input type="email" name="email" id="" placeholder="Enter Email Address" />
                <input type="password" name="password" id="" placeholder="Enter password" />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                {/* <label className={agree ? 'text-black' : 'text-danger'} htmlFor="">Genius car Terms and Condition.</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Genius car Terms and Condition.</label>

                <button disabled={!agree} type="submit" className='btn btn-primary w-50 mx-auto d-block my-3'>Register</button>
            </form>
            <p>Already Account ? <Link to='/login' className='text-decoration-none text-primary' onClick={handleLogin}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;