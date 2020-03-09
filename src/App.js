import React from "react";
import "./App.scss";

import Clock from "./components/clock/clock";
import Board from "./components/propsGame/Board";
import Users from "./axios";
function App() {
  return (
    <div className='App'>
      <p>Miklo \ Chicago, IL \ 312</p>
      <Clock />
      <Users />
      <Board />
    </div>
  );
}

export default App;
