import React from 'react';

interface LoginProps{
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  login: () => void;
}

function Login({firstName, setFirstName, lastName, setLastName, login}: LoginProps) {
  return (
    <div className="login-form__container">
      <h1 className='login-form__title'>Please login</h1>

      <div className='login-form__inputs'>
        <input 
        type="text" 
        placeholder='First name'
        value={firstName}
        onChange={(e) =>setFirstName(e.target.value)}
        />

        <input 
        type="text" 
        placeholder='Last name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <button className='login-form__btn' onClick={login}>login</button>
    </div>
  );
}

export default Login;