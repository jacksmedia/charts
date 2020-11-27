import React, { Component } from 'react';
import PieChartDemo from './PieChartDemo.js';
import logo from './logo.svg';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Infographics that React
          </h1>
        </header>
        <PieChartDemo />
        <h3>
          Stay tuned for more <code>PrimeReact</code> module tests!
        </h3>
      </div>
    );
  }
}

export default App;
