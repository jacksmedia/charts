import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class Headline extends Component {
  render() {
    return (
    	<header className="App-header">
          <p>
            Ὀψὲ, φησι, θεῶν ἀλέουσι μύλοι, κἆϛ παίδων παῖδας τοί κεν μετόπισθε γένωνται.
          </p>
          <h4>
            "The mills of the gods grind slowly, to children's children, and to those who are born after them."
          </h4>
          <h6>
              Celsus, 
              'True Discourse' ~ 200 BCE
          </h6>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            COVID-19 by U.S. States
          </h1>
          <h3>
            Data via
            <a href="https://api.covidtracking.com/" 
            target="_blank"
            rel="noopener noreferrer">
              &nbsp;The COVID Tracking Project at <em>The Atlantic</em>
            </a>
          </h3>
        </header>
    )
  }
}
export default Headline;
