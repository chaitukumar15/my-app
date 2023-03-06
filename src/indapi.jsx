import axios from "axios";
import React  from "react";


class Ind extends React.Component{
    constructor(){
super();
this.state={
id:[],
}

    }


    componentDidMount(){
    var a=window.location.href;
     var d=a.split("/");
     console.log(d);
    //  this.setState({
    //     id:d[4]
    //  })
    axios.get(`http://localhost:3000/posts/${d[4]}`).then(val=>{
        console.log(val);
        this.setState({

            id:val.data
        })
    })
    }

    render(){
        console.log(this.state.id);
        return(
            <>

            <h1>individual item dispaly</h1>

            <h1>{this.state.id.title}</h1>
            <h1>{this.state.id.id}</h1>
            <h1>{this.state.id.author}</h1>
            </>
        )
    }
}
export default Ind