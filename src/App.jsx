import React, { useState } from 'react';
import { html } from 'nornj';
import './App.css';
import { Demo01 } from './page/test/demo01.jsx'



function App() {

  return <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h2>nornj使用演示</h2>
    <Demo01 />

  </div>
}

export default App;
