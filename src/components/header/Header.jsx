import React, { useState } from 'react';
import HeaderLogo from '../../assets/fullLogo.png'
import Nav from '../nav/Nav';
import * as Styles from './HeaderStyles'

const Header = () => {
  return (
    <Styles.HeaderContainer>
      <Styles.HeaderWrapper>
        <Styles.HeaderLogo>
          <img src={HeaderLogo} alt='' />
        </Styles.HeaderLogo>
        <Nav />
      </Styles.HeaderWrapper>
    </Styles.HeaderContainer>
  );
};

export default Header;
