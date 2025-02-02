import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  max-width: 1500px;
  width: 100%;
  height: 80px;
  top: 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  z-index: 999;
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 999;
`;

export const HeaderLogo = styled.div`
  width: 300px;
  /* border: 2px solid blue; */

  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 200px;
  }
`;
