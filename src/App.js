import React, { Component } from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list-component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchField: value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster => ( monster.name.toLowerCase().includes(searchField) ));

    return (
      <div className="App">
        <h1>Monsters Roladex</h1>
        <SearchBox placeholder={'search monsters'} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
