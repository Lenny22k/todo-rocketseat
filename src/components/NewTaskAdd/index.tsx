import { PlusCircle } from 'phosphor-react'
import { FormContainer } from './style'
import { ChangeEvent, FormEvent, useState } from 'react'

interface newTaskAddProps {
  handleCreateNewTask: (task: string) => void
}

export function NewTaskAdd({ handleCreateNewTask }: newTaskAddProps) {
  const [taskInput, setInputTask] = useState('')

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    setInputTask(e.target.value)
  }

  function createNewTask(e: FormEvent) {
    e.preventDefault()

    if (taskInput.length === 0) return alert('Adicione uma tarefa')
    handleCreateNewTask(taskInput)
    setInputTask('')
  }

  return (
    <FormContainer onSubmit={createNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={taskInput}
        maxLength={50}
      />
      <button type="submit">
        Criar
        <PlusCircle size={18} />
      </button>
    </FormContainer>
  )
}
