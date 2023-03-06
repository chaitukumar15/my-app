// import logo from './logo.svg';

// import Hello from './foot';
import Fun from "./hello.jsx";
import malai from "./malai.jpg"
import Hello1 from "./hello1.jsx"
import First from "./wh2.jsx";
import First1 from "./wr1.jsx";
import Hello from "./foot.jsx";
import Ind from "./indapi.jsx";
import Hookkss2 from "./hookk2"

import Hell1 from "./rt.jsx";

import Hookkss from "./hooksss"

import { A } from './fun1'; 

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navv from "./navvbar.jsx";

import B from "./fun2"
function App() {
  
  return (
    <div >


<BrowserRouter>


<Link to="/" className="m-2">todo</Link>
        <Link to="/nextpage/1" className="m-2">table</Link>
<Routes>

<Route  path="/" element={<Hookkss/>}   />

<Route path="/nextpage/:ne" element={<Hookkss2/>}/>
</Routes>


</BrowserRouter>

    </div> 
  );
}

export default App;
