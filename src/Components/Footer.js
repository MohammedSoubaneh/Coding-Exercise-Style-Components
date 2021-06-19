import React from 'react'
import logo from '../Assets/logo-clia.svg';
import doctor from '../Assets/icon-doctor-medium.svg';
import {FooterRow, Approval, DoctorImage, Text, Certified, Logo} from '../Styles/FooterStyles';

function Footer() {
    return (
        <>
        <FooterRow>
          <Approval>
          <DoctorImage src={doctor} />
          </Approval>
          <Text>PHYSICAN<br/> APPROVAL</Text>
          <Certified>
            <Logo src={logo}/>
          </Certified>
          <Text>CLIA CERTIFIED<br/> FERTILITY REPORT</Text>
        </FooterRow>   
        </>
    )
}

export default Footer
