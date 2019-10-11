import React from 'react';

const GenderRadio = ({ gender, handleChange }) => {
  const genderTypes = ['male', 'female', 'other'];

  const genderRadioInputs = genderTypes.map((genType, index) => (
    <label key={index}>
      <input
        type='radio'
        name={genType}
        value={gender}
        checked={gender === genType}
        onChange={() => handleChange(genType)}
      />
      {genType}
    </label>
  ));

  return genderRadioInputs;
};
export default GenderRadio;
