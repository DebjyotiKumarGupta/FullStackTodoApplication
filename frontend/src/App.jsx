import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/createTodo'
// import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  // fetch("http://localhost:3000/todos").then(
  //   async function(response) {
  //     const json  = await response.json();
  //     // console.log(json);
  //     setTodos(json.todos);
  //   }
  // )




  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}
    
//     {[
//  { title:"asd", description:"bfbwe", completed:false},
//     ]}
    
    >


    </Todos>

    </div>
  )
}

export default App
