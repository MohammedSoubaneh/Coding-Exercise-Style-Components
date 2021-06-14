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
          <Text>PHYSICAN APPROVAL</Text>
          </Approval>
          <Certified>
            <Logo src={logo}/>
            <Text>CLIA CERTIFIED<br/> FERTILITY REPORT</Text>
          </Certified>
        </FooterRow>   
        </>
    )
}

export default Footer
