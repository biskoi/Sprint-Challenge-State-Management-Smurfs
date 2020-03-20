import React, { Component } from "react";
import Form from './Form';
import SmurfList from './SmurfList';
import Fetch from './Fetch';

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Fetch/>
        <Form/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
