
import { useDispatch, useSelector } from "react-redux"
import { combineReducers, createStore, legacy_createStore } from "redux"


let Reduxxx =()=>{

let selector=useSelector(state=>state);
console.log(selector.red);
console.log(selector.red.count);
    let dispatch=useDispatch()

let inc =()=>{

    dispatch(increment(1))

}

let dec =(a)=>{
   dispatch(decrement(1))
}


let increment=(a)=>{
    return {
        type:"increment",
        payload:a
    }
}

let decrement=(a)=>{
    return {
        type:"decrement",
        payload:a
    }
}

    return(
        <>
      <h1>  {selector.red.count}</h1>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button> 
        </>
    )
}

let initialstate={count:0}
let red=(state=initialstate,action)=>{
    if(action.type =="decrement"){
        console.log("hh");
        return{
            ...state,count:state.count-action.payload
        }
    }
    else if(action.type =="increment"){
        console.log("hh");
        return{
            ...state,count:state.count+action.payload
        }
    }
    else{
        return {
            ...state
        }
    }
    }

let rootreducer=combineReducers({
    red
})
let store=legacy_createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


    export {store,Reduxxx}