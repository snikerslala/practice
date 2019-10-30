import React from 'react';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  background-color: #282c34;
  padding: 20px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Nav = styled.nav`
  font-size: calc(10px + 1vmin);
  display: flex;
  flex-wrap: wrap;
`;
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  margin: 5px;
  padding: 5px;
  border: 1px solid burlywood;
  display: inline;
  list-style: none;
`;

const Header = ({ changeContent }) => {
  return (
    <StyledHeaderDiv className='App-header'>
      <header role='banner'>Practice examples for React</header>
      <Nav role='navigation'>
        <Ul>
          <Li name='form' onClick={name => changeContent('form')}>
            Form
          </Li>
          <Li name='todo' onClick={name => changeContent('todo')}>
            Todo List
          </Li>
          <Li name='balls' onClick={name => changeContent('balls')}>
            Balls
          </Li>
        </Ul>
      </Nav>
    </StyledHeaderDiv>
  );
};

export default Header;
