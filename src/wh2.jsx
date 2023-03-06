import React from 'react';
import First1 from './wr1';


class First extends React.Component{

    constructor(){
        super();
        this.state={

        }
    }

    getiingprops=(data)=>{
console.log(data);
    }

    render(props){
        let x=10;
        return(<>
        {/* <h1>{this.props.params.id}</h1> */}
        <h1>hello1</h1>
        <First1 h={this.getiingprops}/> 
        </>)
    }
}
export default First