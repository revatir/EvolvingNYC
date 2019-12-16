import React, { Component } from 'react';
import './App.css';

//React-Router imports
import { Route } from 'react-router-dom'

//Custom Components
import Header from './components/Header'
import Borough from './components/Borough'
import Brooklyn from './components/Brooklyn'
import Manhattan from './components/Manhattan'
import Queens from './components/Queens'
import StatenIsland from './components/StatenIsland'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: [2000, 2001, 2002, 2003, 2004, 2005],
    }
  }

  // componentDidMount = async () => {
  //   FetchData("DM", "MANHATTAN", 2000);
  // }

  render() {
    return (
      <div className="App" >
        <Header />
        <Route path="/" />
        <Route path="/Queens" component={Queens} />
        <Route path="/Brooklyn" component={Brooklyn} />
        <Route path="/Manhattan" component={Manhattan} />
        <Route path="/Bronx" render={(props) =>
          <Borough
            year={this.state.year}
          />
        } />
        <Route path="/StatenIsland" component={StatenIsland} />
      </div>
    );
  }
}

export default App;
