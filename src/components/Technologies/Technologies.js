import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText> Technologies I have worked with</SectionText>
  <List>

  <ListItem>
    <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Exposure to: <br/>
          HTML | CSS | JavaScript | React JS
        </ListParagraph>
      </ListContainer>
  </ListItem>

  <ListItem>
    <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Exposure to: <br/>
          Node.js | Databases
        </ListParagraph>
      </ListContainer>
  </ListItem>

  <ListItem>
    <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>Other Technologies</ListTitle>
        <ListParagraph>
          C| C++ | Linux OS
        </ListParagraph>
      </ListContainer>
  </ListItem>



  </List>
  </Section>
);

export default Technologies;
