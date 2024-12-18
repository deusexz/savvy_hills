import React from 'react';
import './about.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";
import Slider from "react-slick";
import DATA from "./aboutSlider";

function AboutVideo(props) {

    const settings = {
        arrows:false,
        dots:false,
        infinite:true,
        autoplay:true,
        pauseOnHover: false,
        slidesToShow:5,
        slidesToScroll:1,
    }

    return (
        <section className={'about'}>
            <div className={'aboutVideoWrapper'}>
                <div className={'aboutVideo'}>
                    <div className={'playButton'}>
                        <FontAwesomeIcon className={'playIcon'} icon={faPlay}/>
                    </div>
                </div>
                <div className={'aboutDescription'}>
                    <h1>Integer vel ultrices ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet. Integer vel ultrices ipsum. Sed elit elit, fringilla a lobortis ut, faucibus nec ante. Nullam maximus tempus urna, eget luctus justo ultricies sit amet. Donec varius lacinia dictum. Proin rutrum dui gravida mauris pellentesque, quis viverra metus finibus. Sed elit elit, fringilla a lobortis ut.</p>
                </div>
            </div>
            <h1 className={'aboutSliderHeader'}>Our Partners</h1>
            <div className={'aboutSlider'}>
                <Slider {...settings}>
                    {
                        DATA.map((item) => (
                            <div className={'aboutSliderItem'} key={item.id}>
                                <FontAwesomeIcon className={'sliderIcon'} icon={item.icon}/>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}

export default AboutVideo;