import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer,CopyrightContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vikramnayyarcp@gmail.com">
            vikramnayyarcp@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <DiCssdeck size="3rem" /><Slogan>Vikram Nayyar CS</Slogan>
        </CompanyContainer>
        <CompanyContainer>
          <Slogan>Vikram Nayyar © 2021 All rights reserved</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/vikramnayyarcs/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/vikramnayyar/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.instagram.com/vikramnayyarcs/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
        <SocialIcons target="_blank" href="https://vikramnayyarcs.medium.com/">
          <AiFillMediumCircle size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
