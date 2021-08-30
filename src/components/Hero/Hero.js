import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio!
        </SectionTitle>
        <SectionText>
          I'm a Computer Science Enthusiast, fascinated by business and the way technology is used to achieve results! 
        </SectionText>
        <a href="#about"> <Button onClick={props.handleClick}>Learn More</Button></a>
      </LeftSection>
    </Section>
    
  </>
);

export default Hero;