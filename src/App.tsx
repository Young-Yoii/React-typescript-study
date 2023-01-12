import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }
  const onSubmit = (form:{name: string, description: string}) => {
    console.log(form);
  }
  return (
    <>
      <Greeting name="Hello" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit}/>
    </>
  )
}

export default App;
