import React from 'react';
import '../assets/css/header.css'
import logo from '../assets/logo/logo.svg'

function AppHeader(props) {
    return (
        <section className={'header'}>
                <img src={logo} alt={""} className={'headerLogo'} />
            <div className={'headerLinks'}>
                <a>Home</a>
                <a>Our Services</a>
                <a>About Us</a>
                <a>FAQ</a>
            </div>
            <button className={'contactButton'}>Contact Us</button>
        </section>
    );
}

export default AppHeader;