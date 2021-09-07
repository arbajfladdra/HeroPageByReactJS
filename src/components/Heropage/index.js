import React from 'react'

//Styles
import '../../App.css'
import './Heropage.style.css'
//Exporting components

const HeroPage = ({Src}) => {
    //function

    //return
    return(
        <section className="hero-page-wrapper">
            <div className="hero-page-item">
                <h1 className="hero-headline">
                Grow
                <br />
                Limitless.
                </h1>
                <p className="lead">Best IT trainings by Industry
                <br /> Leading Experts</p>
                <div className = 'btn-group'>
                    <button className="btn btn-primary">Explore</button>
                    <button className="btn btn-secondary">Contact Us</button>
                </div>
            </div>
            <div className="hero-page-item">
                <img src = {Src} alt="hero-image" />
            </div>
        </section>
    )
}

export default HeroPage;