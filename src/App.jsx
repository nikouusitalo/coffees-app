import React, {Component} from 'react';
import './App.css';
 import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

 
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
    .then(x => this.setState({coffees: x}));
  }
  handleChange =(e) => {
    this.setState({ searchField: e.target.value })

  }
 
  render() {

    
    const {coffees, searchField} = this.state;
    
    const filteredCoffees = coffees.filter((coffee) =>
    coffee.title.toLowerCase().includes(searchField.toLowerCase())
    );
    


 
    
    return (
      <div className='App'>
      <CardList coffees={filteredCoffees}>
      
      </CardList>
      <SearchBox placeholder='Search coffee' handleChange={(e) => this.setState({ searchField: e.target.value })}>
      </SearchBox>
      </div>
    );
  }
}

export default App;
