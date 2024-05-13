
/*
todos = [
   { 


    title:"go to gym",
    description:" go to gym"
    completed: true
   }
]
*/
export function Todos({todos}){

    return <div>
        {todos.map(function(todo){
            return <div>  
                <h1> {todo.title}</h1>
                <h2> {todo.description}</h2>
                <button 
                onClick= {
            ()=>() => {
    console.log(JSON.stringify({
        "id": todo._id
    }));
    fetch("http://localhost:3000/createTodo", {
        method: "PUT",
        body: JSON.stringify({
            "id": todo._id
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        alert(json.message);
    })
    .catch(e => {
        console.log('There was a problem with the fetch operation: ' + e.message);
    });
}

        }
                >{todo.completed===true ?"Already Completed" :"Mark as Completed"}</button>
    </div>
        }
        )}
        </div>
        }
