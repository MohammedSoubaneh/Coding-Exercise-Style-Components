import React from 'react'
import backgroundVideo from '../Assets/samplevideo-16x9-10s.mp4'
import {HeroWarapper, Video} from '../Styles/HeroSectionStyles'

function HeroSection() {
    return (
        <>
        <HeroWarapper>
        <Video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
        </Video>
        </HeroWarapper>
        </>
    )
}

export default HeroSection
