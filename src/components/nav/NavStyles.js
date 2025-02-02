import styled from 'styled-components';

export const NavContainer = styled.nav`
  z-index: 999;
  ul {
    display: flex;
    gap: 20px;
    font-size: 25px;

    li a {
      text-transform: uppercase;
      color: crimson;
      font-weight: bold;
    }

    button {
      background-color: inherit;
      font-size: inherit;
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 600;
      gap: 3px;
      color: crimson;
      text-transform: uppercase;
      svg {
        display: flex;
        align-items: center;
      }
    }

    @media screen and (max-width: 900px) {
       font-size: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ServiceLinkWrapper = styled.div`
  position: relative;
`;

export const ServiceLinks = styled.ul`
  width: 350px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  background-color: crimson;
  padding: 20px;
  gap: 0px !important;

  li a {
    display: flex;
    font-size: 14px;
    color: #eee !important;
    width: 100% !important;
    font-weight: 500 !important;
    padding: 10px;
    line-height: 22px;
    transition: 0.5s ease all;
  }

  li a:hover {
    background-color: #eee;
    color: crimson !important;
  }

  @media screen and (max-width: 900px) {
    li a {
      font-size: 12px;
    }
  }
`;

export const SidebarMenu = styled.div`
  z-index: 999;
  display: none;
  button {
    background-color: inherit;
  }
  svg {
    font-size: 30px;
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
