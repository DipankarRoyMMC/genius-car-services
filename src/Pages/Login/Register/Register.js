import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    const handleFormRegister = (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }


    return (
        <div className='regsiter-form'>
            <h1 className='register-title'>Register Here.</h1>
            <form onSubmit={handleFormRegister} className='form-register'>
                <input type="text" name='name' placeholder="Your Name" />
                <input type="email" name="email" id="" placeholder="Enter Email Address" />
                <input type="password" name="password" id="" placeholder="Enter password" />
                <input type="submit" value="Register" />
            </form>
            <p>Already Account ? <Link to='/login' className='text-decoration-none text-danger' onClick={handleLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;