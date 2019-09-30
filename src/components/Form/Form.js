import React, { useState } from 'react';
import GenderRadio from './GenderRadio';
import './Form.css';
import Countries from './Countries';

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
    <div className="form">
      <h1>This is a sample Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First name: &nbsp;
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="First name"
            required
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
        <label>
          <input
            type="checkbox"
            name="funny"
            checked={funny}
            onChange={e => setFunny(e.target.checked)}
          />
          Are you funny?
        </label>
        {!funny ? null : (
          <label>
            As you said, you're funny. So tell us a joke and let us laugh!
            <textarea
              name="joke"
              value={joke}
              onChange={e => setJoke(e.target.value)}
              placeholder="Your joke :) "
            />
          </label>
        )}
        <button>Submit</button>
        <button onClick={resetForm}>Reset</button>
      </form>
      <p>{joke}</p>
    </div>
  );
};

export default Form;
