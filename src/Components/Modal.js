import React, { useRef, useEffect, useCallback} from 'react'
import SampleVideoSound from '../Assets/samplevideo-16x9-sound.mp4'
import exitButton from '../Assets/exitBtn.png'
import {Background, VideoContainer, Starwars, Close} from '../Styles/ModalStyles';


export const Modal = ({ showVideo, setShowVideo, getClosedTimeStamp, transitionVideo}) => {

    const modalRef = useRef();
    
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowVideo(false);
            getClosedTimeStamp();
        }
      };

    const keyPress = useCallback(
        e => {

            if (e.key === 'Escape' && showVideo) {  
                setShowVideo(false);
                getClosedTimeStamp();
            }
        },
        [showVideo, setShowVideo, getClosedTimeStamp]
      );

    useEffect(
        () => {

            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );
    return (
        <>
        {showVideo ? (
        <Background onClick={closeModal} ref={modalRef}>
            <Close onClick={transitionVideo} src={exitButton} style={{width: '2.5rem'}} />
            <VideoContainer>
                <Starwars autoPlay controls>
                    <source src={SampleVideoSound} type='video/mp4' />
                </Starwars>
            </VideoContainer>
        </Background>
        ): null}
        </>
    )
}

