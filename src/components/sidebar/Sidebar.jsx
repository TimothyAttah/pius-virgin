import React from 'react'
import { Link } from 'react-router-dom';
import * as Styles from './SidebarStyles'
import { FaTimes } from 'react-icons/fa';
import { CloseBackground } from '../CloseBackground';
import { services } from '../../utils';

const Sidebar = ({ setOpenSidebar }) => {


  return (
    <>
      <CloseBackground close={() => setOpenSidebar(false)} />
      <Styles.SidebarContainer>
        <Styles.SidebarWrapper>
          <Styles.SidebarCloseBtn onClick={() => setOpenSidebar(false)}>
            <FaTimes />
          </Styles.SidebarCloseBtn>
          <Styles.SidebarListBox>
            <li>
              <Link to='/' onClick={() => setOpenSidebar(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setOpenSidebar(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to='/services' onClick={() => setOpenSidebar(false)}>
                What we do
              </Link>
            </li>
            {/* <button>What we do</button> */}
            <div>
              {services.map((service,i) => (
                <li key={i}>
                  <Link to={service.path} onClick={() => setOpenSidebar(false)}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </div>
            <li>
              <Link to='/contact' onClick={() => setOpenSidebar(false)}>
                Contact
              </Link>
            </li>
          </Styles.SidebarListBox>
        </Styles.SidebarWrapper>
      </Styles.SidebarContainer>
    </>
  );
};

export default Sidebar
