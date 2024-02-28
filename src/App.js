 

import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.css';
 
import Home from './components/Pages/Home'; // Import your Home component or any other component you want to redirect to after sign-up/sign-in

function App() {
  return (
     
      <div className="App">
      <Routes> 
          <Route exact path="/" element={<Home/>} />  
      </Routes>   
      </div>
     
  );
}

export default App;

