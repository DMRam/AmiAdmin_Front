import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import { Button } from '@carbon/react';
import { HeaderComp } from './components/header/HeaderComp';
import { FlexGridCom } from './components/flexgrid/FlexGridCom';
import { StructList } from './components/containerList/StructList';

function App() {
  return (
    <div>
      <HeaderComp />
      Test
      <br />
      <br />
      <br />
      {/* <Button>Test Button</Button> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FlexGridCom />
      <br />
      <br />
      <br />
      <h3 style={{ textAlign: 'center' }}>Last Transactions</h3>
      <hr style={{ width: '80%' }} />
      <div style={{ marginLeft:40, textAlign: 'center', width: '80%' }}>
        <StructList />
      </div>

    </div>
  );
}

export default App;
