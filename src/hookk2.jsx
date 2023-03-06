import { useEffect, memo,useRef, useState } from "react"
import { useParams } from "react-router-dom";



// function
let Hookkss2=({h,b})=>{

let value=useParams()
console.log(value);
    console.log("chaitu");
    return(
        <>
       <h1>hello child   {b}</h1>
       <button onClick={h}>plus</button>
        </>
    )
}
export default memo(Hookkss2)
