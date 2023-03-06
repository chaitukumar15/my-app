import { compose, applyMiddleware, legacy_createStore as createStore  } from "redux";
import thunk from "redux-thunk";
// import { Reducer } from "react";
import {reducerData,rootrecucers} from "../reducer/reducer"

export let store=createStore(
    rootrecucers,
    
    compose(
        applyMiddleware(thunk)
        
))

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()