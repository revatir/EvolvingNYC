import React, { Component } from 'react';
import './App.css';

//React-Router imports
import { Route } from 'react-router-dom'

//Custom Components
import Header from './components/Header'
import Footer from './components/Footer'
import Bronx from './components/Bronx'
import Brooklyn from './components/Brooklyn'
import Manhattan from './components/Manhattan'
import Queens from './components/Queens'
import StatenIsland from './components/StatenIsland'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      onHome: true,
    }
  }

  // componentDidMount = async () => {
  //   FetchData("DM", "MANHATTAN", 2000);
  // }

  render() {
    return (
      <div className="App" >
        <div className="Site-content">
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
        <Footer />
      </div>
    );
  }
}

export default App;
