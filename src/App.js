import React, { Component } from 'react';
import './App.css';

import { FetchData } from './services/apihelper'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount = async () => {
    FetchData();
  }

  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}

export default App;
