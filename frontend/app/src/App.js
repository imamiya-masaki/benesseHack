import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Stamp from "./components/Stamp/Stamp";
import Profile from "./components/Profile/Profile";
import Battle from "./components/Battle/Battle";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={() => <Home />} exact />
        <Route path="/stamp" render={() => <Stamp />} exact />
        <Route path="/profile" render={() => <Profile />} exact />
        <Route path="/battle" render={() => <Battle />} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
