import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Task from './Task'
import logo from './logo.svg';
import './App.css';


/*https://material-ui.com*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained">HEJ</Button>
        <List>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(value => (
            <Task text="This is the task text" index={value}></Task>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
