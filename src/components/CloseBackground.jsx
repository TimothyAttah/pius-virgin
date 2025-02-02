import React from 'react';
import styled from 'styled-components';

const CloseBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 500px;
`;

export const CloseBackground = ({ close }) => (
  <CloseBackgroundContainer onClick={close}></CloseBackgroundContainer>
);
