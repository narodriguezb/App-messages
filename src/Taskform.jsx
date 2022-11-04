import {useState} from 'react'

export function Taskform({createTask}) {
    const [title,setTitle]=useState('')

    const handlesubmit= (e)=>{
        e.preventDefault()
        createTask(title)
    }

  return (
    <form onSubmit={handlesubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default Taskform;
