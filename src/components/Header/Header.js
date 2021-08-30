import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Vikram Nayyar CS </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>      
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>     
    </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/vikramnayyarcs/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.linkedin.com/in/vikramnayyar/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.instagram.com/vikramnayyarcs/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons target="_blank" href="https://vikramnayyarcs.medium.com/">
          <AiFillMediumCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
