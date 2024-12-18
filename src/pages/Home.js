import React from 'react';
import AppHeader from "../components/Header/AppHeader";
import Hero from "../components/Hero/Hero";
import AppInfo from "../components/Info/AppInfo";
import AboutVideo from "../components/About/AboutVideo";
import Footer from "../components/Footer/Footer";

function Home(props) {
    return (
        <div>
            <AppHeader/>
            <Hero/>
            <AppInfo/>
            <AboutVideo/>
            <Footer/>
        </div>
    );
}

export default Home;