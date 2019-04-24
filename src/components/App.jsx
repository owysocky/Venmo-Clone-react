import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";


function App(){

  var line = {
    border: 'none',
    height: '1px',
    backgroundColor: 'lightgray'
  }

  return (
    <div>
      <Header/>
        <hr style={line}/>
          
      <Switch>
        <MainBody/>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
