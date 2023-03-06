import React from "react";
import axios from "axios";
import Hello1 from "./hello1";
import Table from 'react-bootstrap/Table';



class Hello extends React.Component{
   constructor(){
console.log("cons");
    super();
    this.state={
        apidummy:[],
        sending:{

        },
    }
   }


   componentDidMount(){
    this.hello()
   }


   hello=()=>{
    axios.get("http://localhost:3000/posts").then(val=>{
      console.log(val);
      this.setState({
      
        apidummy:val.data
      })
    })
   }


   postingValue=(e)=>{

console.log(e.target.value);
this.state.sending["title"]=e.target.value
this.setState({
  sending:this.state.sending
})

   }

   postingVal2=(e)=>{
console.log(e.target.value);
this.state.sending["author"]=e.target.value
this.setState({
  sending:this.state.sending
})
   }

   sub=(e)=>{
e.preventDefault();
console.log(this.state.sending,"ht");
axios.post("http://localhost:3000/posts",this.state.sending).then(val=>console.log(val))
this.hello()

   }

   del=(id)=>{
console.log(id,"id");
axios.delete(`http://localhost:3000/posts/${id}`).then(val=>console.log(val))
this.hello()
   }

edt=(val)=>{
console.log(val,"val");
let aa=prompt(`enter the author ${val.author}`)
console.log(aa);
axios.patch(`http://localhost:3000/posts/${val.id}`,{author:aa}).then(val=>console.log(val))
this.hello()
}

clik=(id,e)=>{
  e.preventDefault()
  window.location.assign(`./nextpage/${id}`)
}

    render(){
      
        console.log(this.state.apidummy,"dummy");
        let a=this.state.apidummy.map((val,ind)=>{
            return(
      <tbody key={ind} onClick={(e)=>{this.clik(val.id,e)}}>
        <tr >
          <td>{val.id}</td>
          <td>{val.author}</td>
          <td>{val.title}</td>
         <td><button className="bd-red" onClick={()=>{
          this.del(val.id)
         }}>delete</button></td>
         <td><button className="bd-red" onClick={()=>{
          this.edt(val)
         }}>edit</button></td>
        </tr>
      </tbody>
  
            )
        })
        console.log(a);
        console.log("hhhh");
        return(
    <div>
      <form action="" onSubmit={this.sub}>
        <input type="text" name="" id="" onChange={this.postingValue} />
        <input type="text" name="" id="" onChange={this.postingVal2} />
        <input type="submit" value="submit" />
      </form>
        <h1>hello world</h1>

        {/* <Hello1 h="ramesh"/> */}
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>id</th>
          <th>author</th>
          <th>author</th>
          {/* <th>Username</th> */}
        </tr>
      </thead>
      {a}
      </Table>
    </div>
        )
    }
}

export default Hello;