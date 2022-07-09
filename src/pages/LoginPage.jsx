import React, { useEffect, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const passInput = document.getElementById('loginPass');
    checked ? (passInput.type = 'text') : (passInput.type = 'password');
  }, [checked]);

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, password };
    console.log('data on Login', data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            required
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
            id="loginPass"
            required
          />
        </label>
        <div>
          <label>
            <input
              style={{ margin: '10px' }}
              type="checkbox"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
            />
          </label>
          <p> Show Password</p>
        </div>
        <button type="submit" name="button">
          Login
        </button>
      </form>
    </>
  );
}
