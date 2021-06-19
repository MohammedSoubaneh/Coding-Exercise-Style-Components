import React from 'react';
import backgroundVideo from '../Assets/samplevideo-16x9-10s.mp4';
import smallerBackgroundVideo from '../Assets/samplevideo-4x5-10s.mp4';
import {HeroWarapper, Video, SmallerVideo} from '../Styles/HeroSectionStyles';
import {
    TextOverlay, 
    HeroText, 
    CenterPosition, 
    SeeHow, 
    PlayButton, 
    Text} from '../Styles/TextOverlayStyles';

export const HeroSection = ({transitionVideo}) => {
    return (
        <>
        <HeroWarapper>
        <Video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
        </Video>
        <SmallerVideo autoPlay loop muted>
            <source src={smallerBackgroundVideo} type='video/mp4' />
        </SmallerVideo>
        <TextOverlay>
          <HeroText>Lorem ipsum dolor ismet</HeroText>
          <CenterPosition>
            <SeeHow onClick={transitionVideo}>
              <Text>SEE HOW</Text>
              <PlayButton />
            </SeeHow>
          </CenterPosition>
        </TextOverlay>
        </HeroWarapper> 
        </>
    )
}

export default HeroSection
