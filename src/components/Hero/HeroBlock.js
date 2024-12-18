import React from 'react';
import Slider from 'react-slick';
import styles from './hero.module.css';
import logo from '../../assets/logo/img_1.png';
import DATA from "./constSlider";
import settings from "./sliderSettings";

const HeroBlock = () => {

    return (
        <section className={styles.hero}>
            <div className={styles.heroWrapper}>
                   <div className={styles.heroSlider}>
                       <Slider {...settings}>
                           {
                               DATA.map(({header, description,button, id}) => (
                                   <div key={id} className={styles.sliderItem}>
                                       <h1>{header}</h1>
                                       <p>{description}</p>
                                       <button>{button}</button>
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