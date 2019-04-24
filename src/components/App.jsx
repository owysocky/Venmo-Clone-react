import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";


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

      </Switch>
    </div>
  );
}

export default App;
