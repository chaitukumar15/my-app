import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello1 from './hello1'
import Hello from './foot';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Hell1 from './rt';
import Hell2 from './rt1';
// import First from './wh2';
import Hellog from './fun1';
import Hj from './fnc1';
import { A } from './fun1';
import Staatee from './statee';
import { Store } from 'redux';
// import { store,Reduxxx } from './reduxx';
import { Provider } from 'react-redux';



import {store} from "../src/redux/store/store"

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dis from './carrrd';
import Hookkss from './hooksss';

import Dummy from './components/dummy';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <BrowserRouter>
<div>
        <Link to="/">Home</Link>
        <Link to="/product">Product 1</Link>
        
      </div>
      <Routes>

        <Route path="/product" element={< Hell2/>} />
        <Route path="/" element={<Hell1 />} />
      </Routes>
</BrowserRouter> */}

{/* <Hello/> */}
{/* <Fun/> */}

{/* <App/> */}
{/* <Dis/> */}
{/* <Provider store={store}>

<Reduxxx/>
</Provider> */}
{/* <Hookkss/> */}


<Provider store={store}>

<Dummy/>

</Provider>



</>
);


reportWebVitals();
