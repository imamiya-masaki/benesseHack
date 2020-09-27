import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Stamp from "./components/Stamp/Stamp";
import Profile from "./components/Profile/Profile";
import Battle from "./components/Battle/Battle";
import Login from "./components/Login/Login"
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
var global = this
const store = createStore(reducer)
const app = (
    <div className="App">
      <span>{}</span>
      <BrowserRouter>
        <Route path="/" render={() => <Home />} exact />
        <Route path="/stamp" render={() => <Stamp />} exact />
        <Route path="/profile" render={() => <Profile />} exact />
        <Route path="/battle" render={() => <Battle />} exact />
      </BrowserRouter>
    </div>
  )
const output = function () {
  console.log("get", global, store.getState())
  const user = store.getState().user
  if (!user.hasOwnProperty("user_id")) {
    return (<Login/>);
  }
  return app
}
function App() {
  return (
    <Provider store={store}>
    {output()}
    </Provider>
  );
}

export default App;
