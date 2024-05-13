import { useState } from "react";

export function CreateTodo(){


    //React Query
  
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    return <div>
        <input id="title"  style={{ padding:10, margin:10}} type="text"  placeholder="title"  onChange={(val)=>{
            console.log(val.target.value);

            setTitle(val.target.value);
        }} ></input> <br />
        <input id="description" style= {{padding:10, margin:10}}    type="text"  placeholder="description" onChange={(val)=>{
            console.log(val.target.value);
            setdescription(val.target.value);
        }}></input> <br />
        <button style= {{padding:10, margin:10}} onClick= {
            ()=>{
                console.log(JSON.stringify({
                        title:title, description:description,completed:false
                    }));
                fetch("http://localhost:3000/createTodo", {
                    method: "POST",
                    body:JSON.stringify({
                        title:title, description:description,completed:false
                    }),headers:{"Content-Type" :"application/json"}
                }).then(async function (response){
                    const json = await response.json();
                    alert(json.message)
                })

            }
        }>Add a Todo</button>
    </div>
}