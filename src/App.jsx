import { useState } from "react";

function  App(){
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const addTodos = () => {
    if(!text.trim()) return
    setTodos([...todos, {id: Date.now(), text:text, completed: false}])
    setText('')
  }
  const  deleteTodo = (id) => {setTodos(todos.filter(todo => todo.id !== id))}
  const toggleTodo=(id)=>{setTodos(todos.map(todo=>todo.id===id?{...todo, completed: !todo.completed}:todo))}
  const filtered =  todos.filter((todo) => {
    if(filter==='active') return !todo.completed
    if(filter==='completed') return todo.completed
    return true
  
})
  return(
  <>
    <div style={{padding:'20px', maxWidth:'900px', margin:'0 auto'}}>
      <h1>Todo App</h1>
      <input 
      type='text' 
      value={text} 
      placeholder="Enter a new todo..." 
      onChange={(e)=>setText(e.target.value)}
      onKeyDown={(e) => (e.key === 'Enter' && addTodos())}
      style={{padding:'10px', margin:'10px 0', width:'100%', height:'40px', backgroundColor:'#f0f0f0', border:'1px solid #ccc', color:'black'}}/>
      <button onClick={addTodos} style={{padding:'10px', margin:'10px 0', width:'100px', height:'40px', backgroundColor:'#4CAF50', color:'white', border:'none'}}>add</button>           
      <div style={{margin:'20px 0'}}>
        <button onClick={()=> setFilter('all')} style={{padding:'10px', marginRight:'10px', backgroundColor: filter==='all' ? '#2196F3' : '#e0e0e0', color: filter==='all' ? 'white' : 'black', border:'none'}}>All</button>
        <button onClick={()=> setFilter('active')} style={{padding:'10px', marginRight:'10px', backgroundColor: filter==='active' ? '#2196F3' : '#e0e0e0', color: filter==='active' ? 'white' : 'black', border:'none'}}>Active</button>
        <button onClick={()=> setFilter('completed')} style={{padding:'10px', backgroundColor: filter==='completed' ? '#2196F3' : '#e0e0e0', color: filter==='completed' ? 'white' : 'black', border:'none'}}>Completed</button>
      </div>
      <ul style={{listStyle:'none', padding:'0'}}>
        {filtered.map((todo) =>( <li key={todo.id} style={{padding:'10px', margin:'10px 0', backgroundColor:'#f9f9f9', border:'1px solid #ddd', color:'black'}}>
         <span
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#999' : '#000' }}
            >
              {todo.text}
            </span>
          <button onClick={()=> deleteTodo(todo.id)} style={{padding:'5px 10px', marginLeft:'10px', backgroundColor:'#f44336', color:'white', border:'none'}}>
              Delete
          </button>
        </li> ))}

      </ul>
      {filtered.length === 0 && <p style={{color:'gray'}}>No todos yet. Add some!</p>}
      <p>remaining: {todos.filter(t => !t.completed).length}</p>
    </div>
  </>
)}
export default App;