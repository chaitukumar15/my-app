import { useEffect, useState } from "react";
import { memo } from "react";
 
import { useRef } from "react";

let Staatee2=({h,h1})=>{
   

   let cur=useRef();

useEffect(()=>{
cur.current=h1
},[h1] );

console.log(cur.current,"pre");
console.log("hello");
    return(
        <> 
        <h1>hello</h1>
        <button onClick={h}>hello</button>
        {h1}
        </>
    )
}
export default memo(Staatee2);