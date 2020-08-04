import React from 'react';
import logo from './logo.svg';
import AddNewItem from './AddNewItem';
import ItemList from './ItemList';
import DeleteLastItem from './DeleteLastItem';
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  setItemState = (value) => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  }

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddNewItem value={this.state.value} setItemState={this.setItemState} />
        <DeleteLastItem noItemsFound={this.noItemsFound} deleteLastItem={this.deleteLastItem} />
        <ItemList items={this.state.items} /> 
      </div>
    );
  }
}

export default App;
