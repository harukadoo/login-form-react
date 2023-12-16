import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');

  function login() {
    if (firstName && lastName){
      const fullName = `${firstName} ${lastName}`;
      console.log(fullName);
      setFirstName('');
      setLastName('');
      
      setIsLoggedIn(true);
      setUser(fullName);
    }
  }

  function logout(){
    setIsLoggedIn(false);
    setUser('');
  }

  return (
    <div className="container">
      {!isLoggedIn ? (
      <Login firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} login={login}/>
      ) 
      : (
      <Homepage fullName={user} logout={logout}/>
      )}
    </div>
  );
}

export default App;
