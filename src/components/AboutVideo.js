import React from 'react';
import '../assets/css/about.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay";

function AboutVideo(props) {
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
        </section>
    );
}

export default AboutVideo;