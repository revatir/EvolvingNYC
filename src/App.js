import React, { Component } from 'react';
import './App.css';

//React-Router imports
import { Route } from 'react-router-dom'

//Custom Components
import Header from './components/Header'
import Bronx from './components/Bronx'
import Brooklyn from './components/Brooklyn'
import Manhattan from './components/Manhattan'
import Queens from './components/Queens'
import StatenIsland from './components/StatenIsland'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: [2000, 2001, 2002, 2003, 2004, 2005],
      onHome: true,
    }
  }

  // componentDidMount = async () => {
  //   FetchData("DM", "MANHATTAN", 2000);
  // }

  render() {
    return (
      <div className="App" >
        <Header
          year={this.state.year}
        />
        <Route path="/" />
        <Route path="/Queens" render={(props) =>
          <Queens
            year={this.state.year}
          />} />
        <Route path="/Brooklyn" render={(props) =>
          <Brooklyn
            year={this.state.year}
          />} />
        <Route path="/Manhattan" render={(props) =>
          <Manhattan
            year={this.state.year}
          />} />
        <Route path="/Bronx" render={(props) =>
          <Bronx
            year={this.state.year}
          />} />
        <Route path="/StatenIsland" render={(props) =>
          <StatenIsland
            year={this.state.year}
          />} />
      </div>
    );
  }
}

export default App;
