import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Task from './Task'

class TaskList extends Component {

  render = () => {
    const { tasks, removeFn } = this.props;
    return (
      <List>
        {tasks.map(task => (
          <Task text={task.text} index={task.index} onDelete={removeFn}></Task>
        ))}
      </List>

    )
  }
}

export default TaskList;
