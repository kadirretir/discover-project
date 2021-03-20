import React from 'react'
import {Button} from '././Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/video-1.mp4' autoPlay muted loop/>
            <h1>MACERA BAŞLASIN</h1>
            <p>Neyi Bekliyorsun?</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline" 
                buttonSize="btn--large"
                >BAŞLAYIN
                </Button>

                    <Button 
                className="btns" 
                buttonStyle="btn--primary" 
                buttonSize="btn--large">
                    FRAGMANI İZLEYİN
                    </Button>
            </div>
        </div>
    )
}

export default HeroSection;

