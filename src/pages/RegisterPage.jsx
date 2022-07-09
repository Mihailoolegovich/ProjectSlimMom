import React, { useState } from 'react';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, password };
    console.log('data on Register', data);
  }

  function myFunction() {
    const passInput = document.getElementById('registerPass');
    passInput.type === 'password'
      ? (passInput.type = 'text')
      : (passInput.type = 'password');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Email
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="password"
            name="password"
            minLength="7"
            value={password}
            id="registerPass"
          />
        </label>

        <label>
          <input
            style={{ margin: '10px' }}
            type="checkbox"
            onClick={() => myFunction()}
          />
          Show Password
        </label>
        <button type="submit" name="button">
          Registration
        </button>
      </form>
    </>
  );
}
