import React, { Component } from 'react';
// import axios from 'axios';
import Headline from './headline.js';
import PieChartDemo from './PieChartDemo.js';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <PieChartDemo />
        <h3>
          Check back soon for more infographics & stay safe this winter!
        </h3>
      </div>
    );
  }
}

export default App;
