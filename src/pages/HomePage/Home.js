import React from 'react';
import AppHeaderBlock from "../../components/HeaderBlock/AppHeaderBlock";
import HeroBlock from "../../components/HeroBlock/HeroBlock";
import AppInfoBlock from "../../components/InfoBlock/AppInfoBlock";
import AboutVideoBlock from "../../components/AboutBlock/AboutVideoBlock";
import FooterBlock from "../../components/FooterBlock/FooterBlock";

const Home = () => {

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