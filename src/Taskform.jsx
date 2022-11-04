import {useState} from 'react'

export function Taskform({createTask}) {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')

    const handlesubmit= (e)=>{
        e.preventDefault()
        console.log(title,description)
        createTask(title)
    }

  return (
    <form onSubmit={handlesubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea placeholder='Write the description of your task'>
      onChange={(e) => setDescription(e.target.value)}
      </textarea>
      <button>Guardar</button>
    </form>
  );
}

export default Taskform;
