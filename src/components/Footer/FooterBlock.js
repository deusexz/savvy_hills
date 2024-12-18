import React from 'react';
import styles from './footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ICONS from "./constIcons";

const FooterBlock = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div>
                    <h3 className={styles.footerHeading}>Navigation</h3>
                    <a>Home</a>
                    <a>Our Services</a>
                    <a>About Us</a>
                    <a>FAQ</a>
                </div>
                <div>
                    <h3 className={styles.footerHeading}>Services</h3>
                    <a>Technical Support</a>
                    <a>Data Analysis</a>
                    <a>Web Development</a>
                </div>
                <div>
                    <h3 className={styles.footerHeading}>Legal</h3>
                    <a>Terms of Use</a>
                    <a>Privacy</a>
                </div>
                <div>
                    <h3 className={styles.footerHeading}>Contact Us</h3>
                    <p>New York 575 Madison Ave</p>
                    <p>(212) 755-3388</p>
                    <a>info@hills.com</a>
                </div>
            </div>
            <div className={styles.footerSocial}>
                <div className={styles.socialWrapper}>
                    {
                        ICONS.map(({icon}) => (
                            <div className={styles.footerLink}>
                                <FontAwesomeIcon className={styles.footerIcon} icon={icon}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default FooterBlock;
