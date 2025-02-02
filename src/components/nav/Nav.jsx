import React, { useState } from 'react';
import { services } from '../../utils';
import { Link } from 'react-router-dom';
import * as Styles from './NavStyles';
import { CloseBackground } from '../CloseBackground';
import { BsCaretDownFill } from 'react-icons/bs';
import Sidebar from '../sidebar/Sidebar';
import { FaBars } from 'react-icons/fa';

const Nav = () => {
  const [openServices, setOpenServices] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* <CloseBackground close={() => setOpenServices(false)} /> */}
      <Styles.NavContainer>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>What we do</Link>
          </li>
          {/* <Styles.ServiceLinkWrapper>
            <button onClick={() => setOpenServices((prev) => !prev)}>
              What we do
              <span>
                <BsCaretDownFill />
              </span>
            </button>
            {openServices && (
              <Styles.ServiceLinks>
                {services.map((service, i) => (
                  <li key={i}>
                    <Link to={service.path}>{service.name}</Link>
                  </li>
                ))}
              </Styles.ServiceLinks>
            )}
          </Styles.ServiceLinkWrapper> */}
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </Styles.NavContainer>
      <Styles.SidebarMenu>
        <button onClick={() => setOpenSidebar((prev) => !prev)}>
          <FaBars />
        </button>

        {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
      </Styles.SidebarMenu>
    </>
  );
};

export default Nav;
