import "./site.scss";

import React from "react";
import ReactDom from "react-dom";

import { Route } from "wouter";

import { Home } from './home';
import { CodeViewer } from './codeviewer';


const App: React.FC = () => {
  return (
    <div className="app">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/guid">
        <CodeViewer />
      </Route>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
