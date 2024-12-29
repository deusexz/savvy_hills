import React from 'react';
import styles from './header.module.css';
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import useMediaMobile from "./hooks/CheckWindowWidth";
import {Link} from "react-scroll";
import useToggledMenu from "../MenuBlock/hooks/IsMenuActive";
import MenuBlock from "../MenuBlock/MenuBlock";

const AppHeaderBlock = () => {
    const isMobile = useMediaMobile();
    const {menuOpened, toggleMenu} = useToggledMenu();

    return (
        <section className={styles.header}>
            <Logo className={styles.headerLogo}/>
            <div>
                {
                    isMobile ? <FontAwesomeIcon onClick={toggleMenu} className={styles.SidebarButton} icon={faBars}/>
                        : <div className={styles.headerLinks}>
                            <Link to="hero" smooth={true} duration={500}>Home</Link>
                            <Link to="info" smooth={true} duration={500}>Our Services</Link>
                            <Link to="about" smooth={true} duration={500}>About Us</Link>
                            <Link to="footer" smooth={true} duration={500}>Contacts</Link>
                        </div>
                }
            </div>

            {!isMobile && <button className={styles.contactButton}>Contact Us</button>}
            {menuOpened && <MenuBlock />}
        </section>
    );
}

export default AppHeaderBlock;