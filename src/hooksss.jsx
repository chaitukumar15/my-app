import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react"
import Hookkss2 from "./hookk2";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./dum.css"
// function
let Hookkss=()=>{

let [a,seta]=useState("")
    // https://fakestoreapi.com/products



useEffect(()=>{

axios.get("https://fakestoreapi.com/products").then(val=>{
seta(val.data)
})

},[])


console.log(a);



let aa=a.map((val,ind)=>{
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
    return(
<>
<div className="ggggg">


{aa}

</div>

</>

    )
}
export default Hookkss

