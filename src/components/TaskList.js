import React, { Component } from 'react'
import List from '@material-ui/core/List'
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
