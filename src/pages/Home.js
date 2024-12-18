import React from 'react';
import AppHeaderBlock from "../components/Header/AppHeaderBlock";
import HeroBlock from "../components/Hero/HeroBlock";
import AppInfoBlock from "../components/Info/AppInfoBlock";
import AboutVideoBlock from "../components/About/AboutVideoBlock";
import FooterBlock from "../components/Footer/FooterBlock";

function Home(props) {
    return (
        <div>
            <AppHeaderBlock/>
            <HeroBlock/>
            <AppInfoBlock/>
            <AboutVideoBlock/>
            <FooterBlock/>
        </div>
    );
}

export default Home;