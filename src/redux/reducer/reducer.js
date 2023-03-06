import { combineReducers } from "redux";



let initialState={
    count:0,
    apidata:[]
}

export let reducerData=(state=initialState,action)=>{

    console.log(action);
    console.log(action.type);

   if(action.type=="increment"){
console.log(action.payload);

    return{
        ...state,count:state.count+action.payload
    }
   }
   else if(action.type=="decrement"){

    return{
        ...state,count:state.count-action.payload
    }
}
   else{

    return{
        ...state
    }
   }

}



// let rootdecucers
export let rootrecucers = combineReducers(
 {
   red: reducerData
 }
)


