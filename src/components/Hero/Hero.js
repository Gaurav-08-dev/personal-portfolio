import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br/>
        My personal portfolio
        <br/>
      </SectionTitle>
      <SectionText>
      Student | Budding Developer 
      </SectionText>
      <Button onClick={()=>window.location='https://github.com/Gaurav-08-dev'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;