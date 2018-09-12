export default function(state = {
    tasks: {
      backlog: [],
      ongoing: [],
      done: []
    },
    fetching: false,
    fetched: false,
    error: null
  }, action) {
    switch(action.type) {
      case 'TASK_DELETED': {
        console.log('TASK_DELETED '+action.payload)
        const backlogTasks = state.tasks.backlog.filter(task => task.id !== action.payload)
        const ongoingTasks = state.tasks.ongoing.filter(task => task.id !== action.payload)
        const doneTasks = state.tasks.done.filter(task => task.id !== action.payload)
        return {...state,
          tasks: {
            backlog: backlogTasks,
            ongoing: ongoingTasks,
            done: doneTasks
          }
        }
      }
      case 'FETCHED_TASKS': {
        console.log(fetched)
        const newTasks={...state.tasks}
        newTasks[action.payload.state] = action.payload.tasks
        return {...state, tasks: newTasks }
      }
    }
  }
