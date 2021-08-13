import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import MapPage from "./components/MapPage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">메인 홈</h1>
          {/* <h1 className="App-title">{message}</h1> */}
        </header>
        <Link to="/">홈</Link> <br />
        <Link to="/MapPage">지도</Link>
        <br />
        <h2>검색창</h2>
        <Switch>
          <Route exact path="/" />
          <Route path="/MapPage" component={MapPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
