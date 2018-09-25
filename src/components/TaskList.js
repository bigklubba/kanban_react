import React, { Component } from 'react'
import List from '@material-ui/core/List'
import Task from './Task'
import { connect } from 'react-redux'
import { fetchTasks, deleteTask } from '../actions/taskActions'

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks(this.props.state)
  }

  onDelete(taskId) {
    this.props.deleteTask(taskId)
  }

  render = () => {
    const { tasks, removeFn } = this.props;
    return (
      <List>
        {tasks.map(task => (
          <Task key={task.id} text={task.text} index={task.index} id={task.id} onDelete={(taskId) => this.onDelete(taskId)}></Task>
        ))}
      </List>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({tasks: state.tasks.tasks[ownProps.state]})
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, { fetchTasks, deleteTask })(TaskList)
