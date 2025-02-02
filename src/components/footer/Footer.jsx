import React from 'react'
import textLogo from '../../assets/logoText2.png';
import * as Styles from './FooterStyles';


const Footer = () => {
  return (
    <Styles.FooterContainer>
      <img src={textLogo} alt="" /> <span>&copy; 2025</span>
    </Styles.FooterContainer>
  )
}

export default Footer
