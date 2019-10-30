import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 10px;
  margin-bottom: 0;
  font-size: 12px;

  @media only screen and (min-width: 410px) {
    font-size: 16px;
  }
`;
const P = styled.p`
  display: inline-block;
  margin: 0 5px;

  @media only screen and (min-width: 410px) {
    padding: 10px;
  }
`;
const PLine = styled.p`
  display: inline-block;
  margin: 0;
  padding: 10px 0;
`;
const A = styled.a`
  color: white;
  padding: 2px;
`;

const Footer = () => {
  return (
    <StyledFooter role='contentinfo' className='App-StyledFooter'>
      <P>
        &copy; 2019 by Martyna Skup (
        <A href='https://snikerslala.github.io/'>snikerslala</A>)
      </P>
      <PLine>|</PLine>
      <P>
        <A href='https://github.com/snikerslala'>GitHub</A>
      </P>
      <PLine>|</PLine>
      <P>
        <A href='https://www.linkedin.com/in/martynaskup/'>LinkedIn</A>
      </P>
    </StyledFooter>
  );
};

export default Footer;
