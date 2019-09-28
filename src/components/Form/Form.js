import React, { useState } from 'react';
import GenderRadio from './GenderRadio';
import './Form.css';
import Countries from './Countries';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className="form">
      <h1>This is a sample Form</h1>
      <form>
        <label>
          First name: &nbsp;
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="First name"
          />
        </label>
        <label>
          Email: &nbsp;
          <input
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <GenderRadio gender={gender} handleChange={setGender} />
        <Countries country={country} handleChange={setCountry} />
      </form>
      <p>{country}</p>
    </div>
  );
};

export default Form;
