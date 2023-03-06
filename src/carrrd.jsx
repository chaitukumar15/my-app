import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./dum.css"
class Dis extends React.Component{

    constructor(){
        super();
        this.state={
           items:[]
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products").then(val=>{
            this.setState({
                items:val.data
            })
        })
    }
  

    render(){

        var name = "3";
        console.log(typeof(name))
        console.log(this.state.items);
        let aa=this.state.items.map((val,ind)=>{
            return(<div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={val.image} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          {val.description}
        </Card.Text>
        <Button variant="warning">addtocart</Button>
      </Card.Body>
    </Card>


            </div>)
        })
        return(<>
        <div className="ggggg">


        {aa}

        </div>

      

        </>)
    }
}
export default Dis