import React from 'react';
import styles from './header.module.css';
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';

const AppHeaderBlock = () => {
    return (
        <section className={styles.header}>
            <Logo className={styles.headerLogo}/>
            <div className={styles.headerLinks}>
                <a>Home</a>
                <a>Our Services</a>
                <a>About Us</a>
                <a>FAQ</a>
            </div>
            <button className={styles.contactButton}>Contact Us</button>
        </section>
    );
}

export default AppHeaderBlock;