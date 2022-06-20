import React from 'react';
import { Button } from '../ButtonElement';
import image from "../../images/image1.jpg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  NavBtnInfo,
  NavBtnLinkInfo
} from './InfoElements';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer className="about" lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper >
                <Heading lightText={lightText}>What we do for backers</Heading>
                <TopLine>There are two kinds of Lenders: Backers and Senior Debt providers.
                 Backers  assess the borrowers and decide whether to supply first-loss capital.</TopLine>
                 <TopLine>Senior Debt providers are protected by first-loss capital from Backers and collateral provided by borrowers.</TopLine>
                <Subtitle >High Yields: Senior Debt earns 8% interest, higher than possible in developed economies. Backers earn 15-40% APR</Subtitle>
                <Subtitle >Collateralized: Agri processors provide off-chain assets like equipment, purchase orders and invoices as collateral</Subtitle>
                <Subtitle >Diversification: Lenders diversify by investing in a market uncorrelated with cryptocurrency.
</Subtitle>
<NavBtnInfo>
                    <NavBtnLinkInfo to="/signup">Sign Up as a Backer</NavBtnLinkInfo>
                </NavBtnInfo>
             
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
