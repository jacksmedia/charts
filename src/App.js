import React, { Component } from 'react';
import PieChartDemo from './PieChartDemo.js';
// import logo from './logo.svg';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>
            COVID-19 by Select US States
          </h1>
          <h3>
            Data via
            <a href="https://en.wikipedia.org/wiki/Template:COVID-19_pandemic_data/United_States_medical_cases" 
            target="_blank"
            rel="noopener noreferrer">
              &nbsp;Wikipedia
            </a>
          </h3>
        </header>
        <PieChartDemo />
        <h3>
          Check back soon for more infographics & stay safe this winter!
        </h3>
      </div>
    );
  }
}

export default App;
