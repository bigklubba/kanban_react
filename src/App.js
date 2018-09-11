import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import SwipeableViews from 'react-swipeable-views'
import Task from './Task'
import TaskList from './TaskList'
import logo from './logo.svg';
import './App.css';


/*https://material-ui.com*/

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  )
}

class App extends Component {
  state = {
    loading: false,
    value: 0,
    backlogTasks: [],
    ongoingTasks: [],
    doneTasks: []
  }

  setLoading = (value) => {
    this.setState({ loading: value })
    console.log(value)
  }

  removeTask = (id, state) => {
    console.log("remove task at index " + id)
    const {backlogTasks} = this.state
    let removedElement = backlogTasks.splice(id, id+1)
    console.log(removedElement[0].text)
    this.setState({backlogTasks: backlogTasks})
    console.log("len = " + backlogTasks.length)
  }

  componentDidMount = () => {
    //setInterval(() => this.setLoading(!this.state.loading), 3000)
    let backlogTasks = []
    for (let i = 0; i < 10; i++) {
      let randText = Math.random().toString(36).substr(2, 5);
      backlogTasks.push({text: randText, index: i})
    }
    this.setState({backlogTasks: backlogTasks})

    let ongoingTasks = []
    for (let i = 0; i < 15; i++) {
      let randText = Math.random().toString(36).substr(2, 5);
      ongoingTasks.push({text: randText, index: i})
    }
    this.setState({ongoingTasks: ongoingTasks})

    let doneTasks = []
    for (let i = 0; i < 20; i++) {
      let randText = Math.random().toString(36).substr(2, 5);
      doneTasks.push({text: randText, index: i})
    }
    this.setState({doneTasks: doneTasks})
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = value => {
    this.setState({ value });
  };

  render() {
    const {loading, value, backlogTasks, doneTasks, ongoingTasks} = this.state
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
              Kanban
            </Typography>
          <Button mini variant="fab" color="secondary" aria-label="Add">
            <AddIcon/>
          </Button>
          </Toolbar>
        </AppBar>
        <Fade in={loading} style={{transitionDelay: loading ? '800ms' : '0ms',}} unmountOnExit>
          <LinearProgress/>
        </Fade>
        <Tabs textColor="primary" value={value} fullWidth onChange={this.handleChange}>
          <Tab label="BACKLOG"/>
          <Tab label="ONGOING"/>
          <Tab label="DONE"/>
        </Tabs>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer>
            <TaskList tasks={backlogTasks} removeFn={(i, s) => this.removeTask(i, 0)}/>
          </TabContainer>
          <TabContainer>
            <TaskList tasks={ongoingTasks} removeFn={(i, s) => this.removeTask(i, 1)}/>
          </TabContainer>
          <TabContainer>
            <TaskList tasks={doneTasks} removeFn={(i, s) => this.removeTask(i, 2)}/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
