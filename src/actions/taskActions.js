import uuidv4 from 'uuid/v4'

function getRandomRasks(amount) {
  let tasks = []
  for (let i = 0; i < amount; i++) {
    let randText = Math.random().toString(36).substr(2, 5);
    tasks.push({text: randText, index: i, id: uuidv4()})
  }
  return tasks
}

export function deleteTask(id) {
  return { type: 'TASK_DELETED', payload: id }
}

export function fetchTasks(state) {
    console.log("fetchTasks")
    return {
    type: 'FETCHED_TASKS',
    payload: {
      tasks: getRandomRasks(10),
      state
    }
  }
}
