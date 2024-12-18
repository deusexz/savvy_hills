import React from 'react';
import Slider from 'react-slick';
import './hero.css';
import Logo from '../../assets/logo/img_1.png';
import DATA from "./sliderData";

function Hero(props) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 850,
    }

    return (
        <section className={'hero'}>
            <div className={'heroWrapper'}>
                   <div className={'heroSlider'}>
                       <Slider {...settings}>
                           {
                               DATA.map((item) => (
                                   <div key={item.id} className={'sliderItem'}>
                                       <h1>{item.header}</h1>
                                       <p>{item.description}</p>
                                       <button>{item.button}</button>
                                   </div>))
                           }
                       </Slider>
                   </div>
                <div>
                    <img src={Logo} className={'heroLogo'} alt={''}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;