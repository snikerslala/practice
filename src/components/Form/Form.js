import React, { useState } from 'react';
import GenderRadio from './GenderRadio';
import styled from 'styled-components';
import Countries from './Countries';

const StyledForm = styled.div`
  width: 300px;
  margin: 20px auto;
  border: 3px double white;

  @media only screen and (min-width: 410px) {
    width: 400px;
  `;
const Title = styled.h1`
  margin: 20px 0;
  font-size: 24px;
  background-color: aqua;

  @media only screen and (min-width: 410px) {
    width: 400px;
    font-size: 32px;
  `;
const Label = styled.label`
  display: block;
  margin: 5px 0;
  padding: 0;

  &.joke {
    font-style: italic;
    width: 270px;
    margin: 15px auto 5px;

    @media only screen and (min-width: 410px) {
      width: 320px;
    }
  }
`;
const Textarea = styled.textarea`
  display: block;
  height: 60px;
  width: inherit;
  margin: auto;

  @media only screen and (min-width: 410px) {
    height: 100px;
    width: inherit;
  }
`;

const Button = styled.button`
  margin: 20px 15px 0;
  padding: 5px 10px;
  background-color: aqua;
  border-radius: 20%;
  cursor: pointer;
  font-weight: 700;
`;

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [funny, setFunny] = useState(false);
  const [joke, setJoke] = useState('');

  const resetForm = e => {
    setFirstName('');
    setEmail('');
    setGender('');
    setCountry('');
    setFunny(false);
    setJoke('');
    e.preventDefault();
  };

  const handleSubmit = e => {
    console.log('submitted');
    resetForm(e);
    e.preventDefault();
  };

  return (
    <StyledForm className='form'>
      <Title>This is a sample Form</Title>
      <form onSubmit={handleSubmit}>
        <Label>
          First name: &nbsp;
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder='First name'
            required
          />
        </Label>
        <Label>
          Email: &nbsp;
          <input
            type='text'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
          />
        </Label>
        <Label>
          <GenderRadio gender={gender} handleChange={setGender} />
        </Label>
        <Countries country={country} handleChange={setCountry} />
        <Label>
          <input
            type='checkbox'
            name='funny'
            checked={funny}
            onChange={e => setFunny(e.target.checked)}
          />
          Are you funny?
        </Label>
        {!funny ? null : (
          <Label className='joke'>
            As you said, you're funny. So tell us a joke and let us laugh!
            <Textarea
              name='joke'
              value={joke}
              onChange={e => setJoke(e.target.value)}
              placeholder='Your joke :) '
            />
          </Label>
        )}
        <Button>Submit</Button>
        <Button onClick={resetForm}>Reset</Button>
      </form>
      <p>{joke}</p>
    </StyledForm>
  );
};

export default Form;
