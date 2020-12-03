import "./site.scss";

import * as React from "react";
import * as ReactDom from "react-dom";

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
