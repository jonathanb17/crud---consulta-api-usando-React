import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom'


//boostrapt
import 'bootstrap/dist/css/bootstrap.min.css'

// componentes
import Api from './components/Api';
import Crud from './components/Crud';


function App() {
  return (
    <div className="App">
   
         <BrowserRouter>
         
              <ul>
                <li>
                      <Link to="/">Api</Link>
                </li>
                <li>
                     <Link to="/crud">Crud</Link>  
                </li>
              </ul>

              <Route exact path="/"  component={Api}/>
              <Route path="/crud" component={Crud}/>
         
         </BrowserRouter>

      
    </div>
  );
}

export default App;
