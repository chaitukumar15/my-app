import React from "react";
import withRouter from "./withrouter";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Hell2 extends React.Component{
    constructor(){
        super();
        this.state={
             
        }
    }

componentDidMount(){
// axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.id}`).then(res=>console.log(res))
}

    render(){
        // console.log(this.props.params.id);
        return(
            <>
           
            <h1>hello2</h1>
  
            </>
        )
    }
}
export default Hell2;