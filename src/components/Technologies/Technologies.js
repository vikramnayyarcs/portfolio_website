import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {MdPayment} from 'react-icons/md';
import {AiOutlineCloudServer} from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML <br/>
            CSS <br/>
            JavaScript <br/>
            React JS <br/>
            Meteor JS <br/>
            Next JS <br/>
            Redux <br/>
            Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node JS <br/>
            FireBase 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
   
        <picture>
          <MdPayment size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Payments</ListTitle>
          <ListParagraph>
            Stripe <br />
            PayPal
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
   
        <picture>
          <AiOutlineCloudServer size="3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            AWS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
