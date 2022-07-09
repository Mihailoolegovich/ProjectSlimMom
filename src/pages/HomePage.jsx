import React, { useState } from 'react';

const HomePage = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const [current, setCurrent] = useState('');
  const [desired, setDesired] = useState('');
  const [blood, setBlood] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'height' && setHeight(value);
    name === 'age' && setAge(value);
    name === 'current' && setCurrent(value);
    name === 'desired' && setDesired(value);
    name === 'blood' && setBlood(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { height, age, current, desired, blood };
    console.log('data on Register', data);
  }

  return (
    <>
      <h3>Calculate your daily calorie intake right now</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Height *
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={height}
          />
        </label>
        <label>
          Age *
          <input onChange={handleChange} type="text" name="age" value={age} />
        </label>
        <label>
          Current weight *
          <input
            onChange={handleChange}
            type="text"
            name="current"
            value={current}
            id="registerPass"
          />
        </label>

        <label>
          Desired weight *
          <input
            onChange={handleChange}
            type="text"
            name="desired"
            value={desired}
            id="registerPass"
          />
        </label>

        <label>
          Blood type *
          <input style={{ margin: '10px' }} type="checkbox" />
          <input style={{ margin: '10px' }} type="checkbox" />
          <input style={{ margin: '10px' }} type="checkbox" />
        </label>
        <button type="submit" name="button">
          Start losing weight
        </button>
      </form>
    </>
  );
};

export default HomePage;
