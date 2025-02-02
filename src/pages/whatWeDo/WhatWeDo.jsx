import * as Styles from './WhatWeDoStyles';
import { whatWeDoTypesData } from './whatWeDoData';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  return (
    <Styles.WhatWeDoContainer>
      <Styles.WhatWeDoInfoContainer>
        <Styles.WhatWeDoTitle>What We Do Here</Styles.WhatWeDoTitle>
        <p>
          We consult in Transportation /Movement and Logistics, Marketing and
          Media, Advertising and Public Relations, Research and Training, and
          Management services that are capable of sustaining our clientele and
          partners and launching them to next level of their business.
        </p>
      </Styles.WhatWeDoInfoContainer>
      <Styles.WhatWeDoDescContainer>
        <Styles.WhatWeDoSubTitle>
          THE HOW OF OUR BUSINESS/ OUR TEAM
        </Styles.WhatWeDoSubTitle>
        <p>
          Assemblage of Our professionals and highly trained staff using modern
          facilities gather information and strive to know the needs of next
          generation of our global community and target what they need to do,
          where they need to go and what it takes and help them to achieve their
          desired result.
        </p>
      </Styles.WhatWeDoDescContainer>
      <Styles.WhatWeDoListsContainer>
        <Styles.WhatWeDoLists>
          <h2>
            Our Values Shape <br /> Our Culture
          </h2>
          <p>
            When you meet us, you’ll learn pretty quickly that every member of
            the IMPACT team is unique, but there are 3 very important things
            that we all have in common - - our core values.
          </p>
        </Styles.WhatWeDoLists>
        <Styles.WhatWeDoLists>
          <h2>Passion</h2>
          <p>
            Love what you do and show it. Passion is the energy that keeps us
            going. everyone at piusvirgin puts his/her heart into work and is
            passionate about becoming the best marketer they can be.
          </p>
        </Styles.WhatWeDoLists>
        <Styles.WhatWeDoLists>
          <h2>Helpfulness</h2>
          <p>
            Lend a hand where you can. Everyone here has different strengths,
            but we’re all working towards the same goal. Everyone is ready and
            willing to help each other improve in any way we can.
          </p>
        </Styles.WhatWeDoLists>
        <Styles.WhatWeDoLists>
          <h2>Dependability</h2>
          <p>
            Know what you need to do and own it. We never have to think twice
            about whether or not a teammate is going to pull their weight. We’re
            self-motivated, reliable, and do what it takes to get each project
            done right.
          </p>
        </Styles.WhatWeDoLists>
      </Styles.WhatWeDoListsContainer>
      <Styles.WhatWeDoTypeListContainer>
        <Styles.WhatWeDoSubTitle> what we do</Styles.WhatWeDoSubTitle>
        <Styles.WhatWeDoTypeListWrapper>
          {whatWeDoTypesData.map((items, i) => (
            <Styles.WhatWeDoTypeList>
              <Link to={items.path}>
                <Styles.WhatWeDoTypeListImgBox>
                  <img src={items.img} alt='' />
                </Styles.WhatWeDoTypeListImgBox>
                <h4>{items.name}</h4>
              </Link>
            </Styles.WhatWeDoTypeList>
          ))}
        </Styles.WhatWeDoTypeListWrapper>
      </Styles.WhatWeDoTypeListContainer>
    </Styles.WhatWeDoContainer>
  );
};

export default WhatWeDo;
