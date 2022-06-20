import React from 'react';
import { Button } from '../ButtonElement';
import image from "../../images/moneysolution.svg";
import { NavBtnInfo,NavBtnLinkInfo } from '../InfoSection/InfoElements';
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
  Img
} from './InfoElements';

const SecondInfoSection = ({
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
      <InfoContainer className="discover"lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
              
            </Column1>
            <Column2>
            <TextWrapper>
                <Heading lightText={lightText}>What we do for borrowers</Heading>
                <TopLine>Borrowers are Agri Processors in emerging markets seeking to finance their equipment or cashflow (invoices, purchase orders). </TopLine>
                <TopLine>Borrowers submit due diligence documents along with their proposed loan terms for backers to evaluate. </TopLine>
                 
                 <Subtitle>Lower Interest Rates: 10-12 % interest</Subtitle>
                <Subtitle >Borrow on Your Terms: Borrowers propose the terms of the loan including tenor, interest rates and collateral</Subtitle>
                <Subtitle >Fast: get funded 5x faster than banks and traditional financiers</Subtitle>
                <NavBtnInfo>
                    <NavBtnLinkInfo to="/signup">Sign Up as a borrower</NavBtnLinkInfo>
                </NavBtnInfo>
                
             
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default SecondInfoSection;
