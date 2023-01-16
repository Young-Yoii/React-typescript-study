import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greetings';
import Counter from './components/Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';

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
      <CounterContainer />
      <MyForm onSubmit={onSubmit}/>
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
      <TodoApp />
    </>
  )
}

export default App;
