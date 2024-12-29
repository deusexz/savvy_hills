import React from 'react';
import Slider from 'react-slick';
import styles from './hero.module.css';
import logo from '../../assets/logo/img_1.png';
import DATA from "./Slider.constants";
import settings from "./Slider.settings";
import {Link} from "react-scroll";

const HeroBlock = () => {

    return (
        <section id={"hero"} className={styles.hero}>
            <div className={styles.heroWrapper}>
                   <div className={styles.heroSlider}>
                       <Slider {...settings}>
                           {
                               DATA.map(({header, description,button, id, scroll}) => (
                                   <div key={id} className={styles.sliderItem}>
                                       <h1>{header}</h1>
                                       <p>{description}</p>
                                       <Link to={scroll} smooth={true} duration={500}>
                                           <button>{button}</button>
                                       </Link>
                                   </div>))
                           }
                       </Slider>
                   </div>
                <div>
                    <img src={logo} alt={"logo"} className={styles.heroLogo} />
                </div>
            </div>
        </section>
    );
}

export default HeroBlock;