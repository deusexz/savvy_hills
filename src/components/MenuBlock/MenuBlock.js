import React from 'react';
import styles from './menu.module.css';
import {motion, AnimatePresence} from "framer-motion";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-scroll";
import useToggledMenu from "./hooks/IsMenuActive";

const MenuBlock = () => {
    const {menuOpened, toggleMenu} = useToggledMenu();

    return (
            <AnimatePresence>
                {menuOpened &&
                    <motion.div className={styles.menu}
                                initial={{width: 0, height: 0, visibility:"hidden"}}
                                animate={{width: "40%", height: "100vh", visibility:"visible"}}
                                exit={{width: 0, height: 0, opacity: 0}}
                                transition={{duration: 0.4}}
                    >
                        <FontAwesomeIcon icon={faX} onClick={toggleMenu} className={styles.closeButton}/>
                        <motion.div className={styles.menuWrapper}
                                    initial={{opacity: 0}}
                                    animate={{transform: "translateY(100px)", opacity: 1}}
                                    transition={{delay: 0.3}}
                                    exit={{opacity: 0}}>
                            <Link to="hero" smooth={true} duration={1000}>Home</Link>
                            <Link to="info" smooth={true} duration={1000}>About</Link>
                            <Link to="about" smooth={true} duration={1000}>About Us</Link>
                            <Link to="footer" smooth={true} duration={1500}>Contact Info</Link>
                        </motion.div>
                        <motion.button className={styles.contactButton}
                                       initial={{opacity: 0, transform: "translateX(150px)"}}
                                       animate={{opacity: 1, transform: "translateX(0)"}}
                                       transition={{delay: 0.4}}>Contact Us</motion.button>
                    </motion.div>
                }
            </AnimatePresence>
    );
}

export default MenuBlock;