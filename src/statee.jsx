import { useCallback, useEffect, useState } from "react";
import { memo } from "react";
 import Staatee2 from "./statee2"; 

import { useRef } from "react";

let Staatee=()=>{
   let [h,hset]=useState(0)
   let [h1,h1set]=useState(0)
   let cur=useRef();

useEffect(()=>{
cur.current=h
},[h] );


let helloo=useCallback(()=>{
    h1set((s)=>{
        console.log(s);
        return s+1
    })
},[h1])

// console.log(h,"pre");
    return(
        <> 

        <h1>hello</h1>
        <button onClick={()=>{
            hset( (h)=>{
// console.log(h);
return h+1
            })
        }}>hello</button>
        {h}
        <Staatee2 h={helloo} h1={h1}/>
        </>
    )
}
export default Staatee;