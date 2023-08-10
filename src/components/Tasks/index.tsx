import { Trash } from 'phosphor-react'
import { TaskItem, TasksContainer } from './styles'

import './styles.css'

interface Tasks {
  name: string
  id: string
  completed: boolean
}

interface TaskProps {
  tasks: Tasks[]
  handleDeleteTask: (taskId: string) => void
  handleTaskIsCompleted: (taskId: string) => void
}

export function Tasks({
  tasks,
  handleDeleteTask,
  handleTaskIsCompleted
}: TaskProps) {
  console.log(tasks)
  return (
    <TasksContainer>
      {tasks.length === 0 && <span>adicione uma nova tarefa!</span>}
      {tasks.map(task => (
        <TaskItem>
          <label className="circle-checkbox">
            <input
              type="checkbox"
              onClick={() => handleTaskIsCompleted(task.id)}
            />
            <span className="checkmark"></span>
          </label>

          <div style={task.completed ? { textDecoration: 'line-through' } : {}}>
            {task.name}
          </div>
          <strong>
            <Trash size={20} onClick={() => handleDeleteTask(task.id)} />
          </strong>
          </TaskItem>
      ))}
    </TasksContainer>
  )
}
