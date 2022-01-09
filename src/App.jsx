import React, {Component} from 'react';
import './App.css';
 import { CardList } from './components/card-list/card-list.component';
 
class App extends Component {
 
  constructor() {
    super();
 
    this.state = {
      coffees: [],
      searchField: ''
    };
  }
 
  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then(titles => this.setState({coffees: titles}));
  }
 
  render() {

    const {coffees, searchField} = this.state;
    const filteredCoffees = coffees.filter(coffees => coffees.titles.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
      <input aria-label="Close" type='search' placeholder='Search coffee' onChange={e => this.setState({searchField: e.target.value})}
      
      />
      <CardList coffees={filteredCoffees}>
      
      </CardList>
      </div>
    );
  }
}

export default App;
