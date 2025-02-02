import styled from "styled-components";

export const WhatWeDoContainer = styled.div`
  padding: 20px;
  z-index: 999;

  @media screen and (max-width: 400px){
    text-align: center;
  }
`;
export const WhatWeDoInfoContainer = styled.div`
  margin-bottom: 30px;

  p{
    font-size: 22px;
  }
`;
export const WhatWeDoDescContainer = styled.div`
  text-align: center;
  p {
    font-size: 18px;

  }

  margin-bottom: 50px;
`;


export const WhatWeDoListsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;
export const WhatWeDoLists = styled.div`
  width: 270px;
  height: 200px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 100%;
  padding-top: 30px;
  text-align: center;
  font-family: cursive;

  h2 {
    color: red;
    font-size: 16px;
    padding-bottom: 20px;
    text-transform: capitalize;
    font-style: italic;
  }

  p {
    font-size: 12px;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
    width: 225px !important;
    height: 230px;
    padding: 10px 10px;

    h2 {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
`;

export const WhatWeDoTitle = styled.h3`
  color: red;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
export const WhatWeDoSubTitle = styled.h2`
  color: red;
  padding-bottom: 10px;
  text-transform: uppercase;
`;


export const WhatWeDoListTitle = styled.h4`
  color: red;
  font-family: cursive;
  padding-bottom: 10px;


`;

export const WhatWeDoTypeListContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
  margin-top: 80px;
`

export const WhatWeDoTypeListWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  z-index: 999;
  width: 100%;
  gap: 20px;

`;

export const WhatWeDoTypeList = styled.div`
  width: 250px;
  height: 250px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  h4 {
    text-transform: capitalize;
    text-align: center;
  }
`;

export const WhatWeDoTypeListImgBox = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;
