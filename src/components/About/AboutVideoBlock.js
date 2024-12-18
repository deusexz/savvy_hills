import React from 'react';
import styles from './about.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";
import Slider from "react-slick";
import DATA from "./constSlider";
import settings from "./sliderSettings";

 const AboutVideoBlock = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutVideoWrapper}>
                <div className={styles.aboutVideo}>
                    <div className={styles.playButton}>
                        <FontAwesomeIcon className={styles.playIcon} icon={faPlay}/>
                    </div>
                </div>
                <div className={styles.aboutDescription}>
                    <h1>Integer vel ultrices ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet. Integer vel ultrices ipsum. Sed elit elit, fringilla a lobortis ut, faucibus nec ante. Nullam maximus tempus urna, eget luctus justo ultricies sit amet. Donec varius lacinia dictum. Proin rutrum dui gravida mauris pellentesque, quis viverra metus finibus. Sed elit elit, fringilla a lobortis ut.</p>
                </div>
            </div>
            <h1 className={styles.aboutSliderHeader}>Our Partners</h1>
            <div className={styles.aboutSlider}>
                <Slider {...settings}>
                    {
                        DATA.map(({id,icon}) => (
                            <div className={styles.aboutSliderItem} key={id}>
                                <FontAwesomeIcon className={styles.sliderIcon} icon={icon}/>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}

export default AboutVideoBlock;