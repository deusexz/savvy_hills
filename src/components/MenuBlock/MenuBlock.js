import React from 'react';
import styles from './menu.module.css';
import {motion, AnimatePresence} from "framer-motion";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-scroll";
import {useDispatch, useSelector} from "react-redux";
import {toggleContactPopUp, toggleMenu} from "../../store/actions/action";

const MenuBlock = () => {
    const dispatch = useDispatch();
    const isMenuToggled = useSelector(store => store.menuReducer.isMenuToggled);

    const toggleMenuBar = () => {
        dispatch((toggleMenu()));
    }

    const togglePopUp = () => {
        dispatch((toggleContactPopUp()));
    }

    return (
            <AnimatePresence>
                {
                    isMenuToggled && <motion.div className={styles.menu}
                                             initial={{width: 0, height: 0, visibility: "hidden"}}
                                             animate={{width: "40%", height: "100vh", visibility: "visible"}}
                                             exit={{width: 0, height: 0, opacity: 0}}
                                             transition={{duration: 0.5}}
                    >
                        <FontAwesomeIcon icon={faX} onClick={toggleMenuBar} className={styles.closeButton}/>

                        <motion.div className={styles.menuWrapper}
                                    initial={{opacity: 0, translateY:"-500px"}}
                                    animate={{translateY:"100px", opacity: 1}}
                                    transition={{duration: 0.65}}
                                    exit={{opacity: 0, translateX:"700px"}}>
                            <Link to="hero" smooth={true} duration={1000}>Home</Link>
                            <Link to="info" smooth={true} duration={1000}>About</Link>
                            <Link to="about" smooth={true} duration={1000}>About Us</Link>
                            <Link to="footer" smooth={true} duration={1000}>Socials</Link>
                        </motion.div>
                        <motion.button className={styles.contactButton}
                                       onClick={togglePopUp}
                                       initial={{opacity: 0, transform: "translateX(150px)"}}
                                       animate={{opacity: 1, transform: "translateX(0)"}}
                                       exit={{transform: "translateX(400px)", opacity: 0}}
                                       transition={{duration:0.70}}>
                            Contact Us
                        </motion.button>
                    </motion.div>
                }
            </AnimatePresence>
    );
}

export default MenuBlock;