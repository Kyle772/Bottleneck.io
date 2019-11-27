import React from 'react';
import logo from './logo.png';
import './App.scss';


function App() {
  return (
    <div>
      <header className="main">
        <img src={logo} className="logo" alt="logo" />
        <div className="button-container">
          <a className="button" href="/processing">Processing</a>
          <a className="button" href="/recipes">Recipes</a>
          <a className="button" href="/cost">Cost</a>
          <a className="button" href="/inventory">Inventory</a>
          <a className="button" href="/tests">Tests</a>
          <a className="button" href="/sales">Sales</a>
        </div>
      </header>
      <div className="content-container"></div>
    </div>
  );
}

export default App;
