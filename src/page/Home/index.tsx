import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { NewTaskAdd } from '../../components/NewTaskAdd'
import { ContainerTask } from './style'
import { Tasks } from '../../components/Tasks'


interface Tasks {
  name: string
  id: string
  completed: boolean
}

const storedTasks = JSON.parse(localStorage.getItem('task') || '[]')

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>(storedTasks)

  const tasksQuantity = tasks.length
  const totalDoneTasks = tasks.reduce((total, task) => {
    return (total += task.completed ? 1 : 0)
  }, 0)

  function handleCreateNewTask(task: string) {
    setTasks(prev => [
      ...prev,
      {
        name: task,
        id: String(tasks.length + 1),
        completed: false
      }
    ])
  }

  function handleDeleteTask(taskId: any) {
    const newTaskDelete = tasks.filter(task => task.id !== taskId)

    setTasks(newTaskDelete)
  }

  function handleTaskIsCompleted(taskId: string) {
    const newTask = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })

    setTasks(newTask)
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  }, [tasks])

  

  return (
    <>
      <Header />
      <NewTaskAdd handleCreateNewTask={handleCreateNewTask} />

      <ContainerTask>
        <header>
          <span>
            Tarefas criadas
            <strong>{tasksQuantity}</strong>
          </span>
          <span>
            Concluidas
            <strong>
              {totalDoneTasks} de {tasksQuantity}
            </strong>
          </span>
        </header>

        <section>
          <Tasks
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleTaskIsCompleted={handleTaskIsCompleted}
          />
        </section>
      </ContainerTask>
    </>
  )
}
