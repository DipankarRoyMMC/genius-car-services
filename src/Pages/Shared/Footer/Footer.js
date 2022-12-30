import React from 'react';
import './Footer.css';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className='text-center my-5'>
            <p>Copyright &copy; {getCurrentYear()}</p>
        </footer>
    );
};

export default Footer;