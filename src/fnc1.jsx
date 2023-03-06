// import { useState } from "react"
import { useState, useCallback } from "react";
import Todos from "./fnc2"



let Hj=()=>{

let [a,aa]=useState(0)
const [todos, setTodos] = useState([]);


const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
    return(
        <>
        <Todos todos={todos} addTodo={addTodo} />
       <h1>hellllo{a}</h1> 
       <button onClick={()=>{
aa(a+1)   }}>jjjjjj</button>
       {/* <Hjj/> */}
        </>
    )
}
export default Hj