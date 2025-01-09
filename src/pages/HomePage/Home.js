import React from 'react';
import AppHeaderBlock from "../../components/HeaderBlock/AppHeaderBlock";
import HeroBlock from "../../components/HeroBlock/HeroBlock";
import AppInfoBlock from "../../components/InfoBlock/AppInfoBlock";
import AboutVideoBlock from "../../components/AboutBlock/AboutVideoBlock";
import FooterBlock from "../../components/FooterBlock/FooterBlock";
import ContactFormBlock from "../../components/ContactBlock/ContactFormBlock";

const Home = () => {

    return (
        <div>
            <ContactFormBlock/>
            <AppHeaderBlock/>
            <HeroBlock/>
            <AppInfoBlock/>
            <AboutVideoBlock/>
            <FooterBlock/>
        </div>
    );
}

export default Home;