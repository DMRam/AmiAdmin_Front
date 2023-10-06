import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import { Button } from '@carbon/react';
import HeaderComp from './components/header';

function App() {
  return (
    <div>
      <HeaderComp/>
      Test
      <br/>
      <br/>
      <br/>
      <Button>Test Button</Button>
    </div>
  );
}

export default App;
