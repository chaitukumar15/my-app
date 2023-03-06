import { useEffect } from "react"
import { memo } from "react";
let Todos=({todos,addTodo})=>{

// let [aA,aaA]=useEffect();

    console.log("HELLLLLL");
    return(
        <>
         
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
 
        </>
    )
}
export default memo(Todos)