import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0px;
  background-color: navy;
  color: #fff;
  z-index: 999;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  /* padding: 20px; */
`;

export const SidebarCloseBtn = styled.button`
 position: absolute;
 right: 20px;
 top: 20px;
 background-color: inherit;
 color: #fff;
 font-size: 22px;
`

export const SidebarListBox = styled.ul`
  margin-top: 80px;
  li a,
  button {
    display: flex;
    align-items: center;
    color: #eee;
    font-size: 16px;
    text-transform: uppercase;
    margin: 0;
    padding: 15px 20px;
    transition: 0.5s ease all;
  }

  button {
    background-color: inherit;
    color: #eee;
    text-transform: uppercase;
  }

  li a:hover {
    background-color: crimson;
  }
`;
