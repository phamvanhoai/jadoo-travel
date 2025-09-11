import React from 'react'


const Banner = () => {
    return (
        <>
            {/* <!-- Hero Section --> */}
            <section class="hero">
                {/* <!-- Text --> */}
                <div class="hero-text">
                    <p class="label">Best destinations around the world</p>
                    <h1>
                        Travel, <span>enjoy <img src="/assets/Decore.png" alt="underline" /></span><br />
                            and live a new <br /> and full life
                            </h1>
                            <p class="desc">
                                Built Wicket longer admire do barton vanity itself do in it.
                                Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                            </p>
                            <div class="cta-buttons">
                                <button class="btn-primary">Find out more</button>
                                <div class="btn-demo">
                                    <div class="circle">▶</div>
                                    <span>Play Demo</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image --> */}
                        <div class="hero-image">
                            <img src="/assets/Image.png" alt="Traveler Hero" />
                        </div>
                    </section>
                </>
                )
}

                export default Banner