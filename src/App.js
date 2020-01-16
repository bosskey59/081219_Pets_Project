import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import PetNew from './containers/PetNew';
import NavBar from './components/NavBar';
import PetList from './containers/PetList';
import PetShow from './containers/PetShow';

class App extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     id: 0,
  //     pets: []
  //   }
  // }

  // addPet = pet => {
  //   pet.id = this.state.id + 1;

  //   this.setState({
  //     pets: [...this.state.pets, pet],
  //     id: this.state.id + 1
  //   });
  // }

  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pets/new" component={PetNew} />
            <Route exact path="/pets" component={ PetList } />
            <Route exact path="/pets/:id" render={ props => <PetShow {...props} pets={ this.state.pets } />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
