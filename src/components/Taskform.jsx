import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export function Taskform() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)

  const handlesubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle("")
    setDescription("")
  }

  return (
    <div className='max-w-md mx-auto'>
      
      <form onSubmit={handlesubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder='Write the description of your task'
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}>
        </textarea>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" type='submit'>Guardar</button>
      </form>
    </div>
  );
}

export default Taskform;
