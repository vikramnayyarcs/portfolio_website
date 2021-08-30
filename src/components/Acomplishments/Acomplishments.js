import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {/* {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))} */}

      
    </Boxes>

    <iframe src="https://github-readme-stats.vercel.app/api?username=vikramnayyarcs&show_icons=true" style={{width: "400", height: "200", border: "none"}} title="GitHub Statistics"></iframe>

    <SectionDivider/>
  </Section>
);

export default Acomplishments;
