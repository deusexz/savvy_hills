import React from 'react';
import AppHeader from "../components/AppHeader";
import Hero from "../components/Hero";
import AppInfo from "../components/AppInfo";
import AboutVideo from "../components/AboutVideo";
import Footer from "../components/Footer";

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