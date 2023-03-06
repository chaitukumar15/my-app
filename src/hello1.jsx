import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import withRouter from "./hello";
class Hello1 extends React.Component {
  constructor() {

    super();
    this.state = {
      todo: [],
      dummy: "",
    };

  }

  grttingValue = (e) => {

    this.setState({
      dummy: e.target.value,
    });

  };

  submitimng = (e) => {
    // console.log(e);
    e.preventDefault();
    // console.log(this.state.dummy);
    this.setState({
      dummy: "",
      todo: [...this.state.todo, this.state.dummy],
    });
  };

    dele = (val) => {
    console.log(val,"value");
      let fff = this.state.todo.filter((val1, ind) => {
        console.log(val1,"val1");
        return val1 != val;
      });
  console.log(fff);
      this.setState({
        todo: [...fff],
      });
      console.log(fff);
    };


    edit=(val,ind,e)=>{
     let vv=prompt(`${val}`)
     e.preventDefault()
// console.log(vv);
this.state.todo.splice(ind,1,vv);
this.setState({
  todo:[...this.state.todo]
})
console.log(this.state.todo);
    }

  render() {
    console.log("h");
    // console.log(this.state.params.id,"id");
    console.log(this.state.todo,"jj");
    let a = this.state.todo.map((val, ind) => {
      return (
        <ul>
          <li key={ind}>{val}</li>{" "}
          <button onClick={()=>this.dele(val)} key={ind + 1}>
  
            delete
          </button>
          <button onClick={(e)=>this.edit(val,ind,e) } key={ind+2}>edit</button>
        </ul>
      );
    });



    return (
      <>
        <h1>todo list </h1>
        <form action="" onSubmit={this.submitimng}>
          <input type="submit" value="submit" />
          <input
            type="text"
            name=""
            id="hello"
            onChange={this.grttingValue}
            value={this.state.dummy}
          />
           {a}
        </form>



      </>
    );
  }
}

export default Hello1;
