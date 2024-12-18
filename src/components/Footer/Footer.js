import React from 'react';
import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
    return (
        <section className={'footer'}>
            <div className={'footerWrapper'}>
                <div>
                    <h3 className={'footerHeading'}>Navigation</h3>
                    <a>Home</a>
                    <a>Our Services</a>
                    <a>About Us</a>
                    <a>FAQ</a>
                </div>

                <div>
                    <h3 className={'footerHeading'}>Services</h3>
                    <a>Technical Support</a>
                    <a>Data Analysis</a>
                    <a>Web Development</a>
                </div>
                <div>
                    <h3 className={'footerHeading'}>Legal</h3>
                    <a>Terms of Use</a>
                    <a>Privacy</a>
                </div>
                <div>
                    <h3 className={'footerHeading'}>Contact Us</h3>
                    <p>New York 575 Madison Ave</p>
                    <p>(212) 755-3388</p>
                    <a>info@hills.com</a>
                </div>
            </div>
            <div className={'footerSocial'}>
                <div className={'socialWrapper'}>
                    <div className={'footerLink'}>
                        <FontAwesomeIcon className={'footerIcon'} icon={faGithub}/>
                    </div>
                    <div className={'footerLink'}>
                        <FontAwesomeIcon className={'footerIcon'} icon={faTwitter}/>
                    </div>
                    <div className={'footerLink'}>
                        <FontAwesomeIcon className={'footerIcon'} icon={faLinkedin}/>
                    </div>
                    <div className={'footerLink'}>
                        <FontAwesomeIcon className={'footerIcon'} icon={faFacebook}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
