import React from 'react'


const Banner = () => {
    return (
        <>
            {/* Hero Content */}
            <div className="hero-content">
                <div className="text">
                    <p className="tagline">BEST DESTINATIONS AROUND THE WORLD</p>
                    <h1>
                        Travel, enjoy <br />
                        and live a new <br />
                        <span className="highlight">
                            and full life
                            <img src="/assets/decore.png" alt="underline" className="underline" />
                        </span>
                    </h1>
                    <p className="desc">
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>
                    <div className="cta">
                        <button className="btn-primary">Find out more</button>
                        <button className="btn-play">▶</button>
                        <span>Play Demo</span>
                    </div>
                </div>

                <div className="image">
                    <img src="/assets/hero-girl.png" alt="Traveler" className="hero-img" />
                </div>
            </div>
        </>
    )
}

export default Banner
