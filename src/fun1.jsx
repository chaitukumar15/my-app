import { useEffect, useRef, useState } from "react"

import B from "./fun2"



export const A=()=>{

    let [a,aa]=useState(0);
    let k=useRef(0)
    console.log(a);

useEffect(()=>{
    // console.log(a,"he");
    k.current=a
console.log("hello");
},[a])

console.log(k.current,"pre");

let gb=()=>{aa(ss=>{
    // console.log(ss,"pre");
    return ss+1
    // return {})
})
}
// console.log(a);
    return(
        <>
        <h1>hello {a}</h1>
        
        
        <button onClick={gb}>ince</button>
        
        {/* <B /> */}
        </>
    )
}

