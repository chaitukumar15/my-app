import { memo } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";




const B=()=>{
    let [a1,aa]=useState(0);

let k=useParams();

console.log(k);

console.log("hello");
    return(
        <>
         <>
        <h1>
            hell1111{a1}
        </h1>
        
        <button onClick={()=>{aa(a1+1)}}>ince1</button>
        </>
        </>
       
    )
}
export default memo(B)