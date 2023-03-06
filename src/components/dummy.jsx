
import {incrementAction,decrementAction} from "../redux/actions/action"


import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import axios from "axios";
let Dummy=()=>{

let dispatch=useDispatch();


let [apidata,setapi]=useState("")


let fun1=async()=>{

axios.get("https://fakestoreapi.com/products").then(val=>

{
    console.log(val.data);
    console.log(val.data[0]);
   setapi(val.data)

})
// let a= axios.get("https://fakestoreapi.com/products");

// let aa= await a;
// console.log(aa.data);
// dispatch()

}

useEffect(()=>{

fun1()

},[])

console.log(apidata[0]);
console.log(apidata[0]?.category);

let selector =useSelector((val)=>val);

console.log(selector.red.count);

// console.log(selector?.count);

console.log(incrementAction());

    let increment=()=>{
        dispatch(incrementAction(apidata))
    }

    let decrement=()=>{
        dispatch(decrementAction(5))
    }

    return(
        <div>

        <h1></h1>
        {/* <h1>{selector?.count}</h1> */}

        {selector?.red?.count ? <h1>{selector.red?.count}</h1>:null}

        <button onClick={increment}>incremnt</button>
       <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Dummy