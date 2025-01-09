import React from 'react';
import styles from './header.module.css';
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import useMediaMobile from "./hooks/CheckWindowWidth";
import {Link} from "react-scroll";
import MenuBlock from "../MenuBlock/MenuBlock";

import {useDispatch} from "react-redux";
import {toggleMenu, toggleContactPopUp} from "../../store/actions/action";

const AppHeaderBlock = () => {
    const isMobile = useMediaMobile();

    const dispatch = useDispatch();
    const toggleMenuBar = () => {
        dispatch((toggleMenu()));
    }
    const togglePopUp = () =>{
        dispatch((toggleContactPopUp()))
    }

    return (
        <section className={styles.header}>
            <Logo className={styles.headerLogo}/>
            <div>
                {
                    isMobile ? <FontAwesomeIcon onClick={toggleMenuBar} className={styles.SidebarButton} icon={faBars}/>
                        : <div className={styles.headerLinks}>
                            <Link to="hero" smooth={true} duration={500}>Home</Link>
                            <Link to="info" smooth={true} duration={500}>Our Services</Link>
                            <Link to="about" smooth={true} duration={500}>About Us</Link>
                            <Link to="footer" smooth={true} duration={500}>Socials</Link>
                        </div>
                }
            </div>

            {!isMobile && <button onClick={togglePopUp} className={styles.contactButton}>Contact Us</button>}
             <MenuBlock />
        </section>
    );
}

export default AppHeaderBlock;