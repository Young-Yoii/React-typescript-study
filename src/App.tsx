import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }
  return <Greeting name="Hello" onClick={onClick} />
}

export default App;
