import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { Provider } from "./context";
import Routes from "./Routes";

function App() {
  return (
    <Provider>
      <Router>
        <div class="wrapper d-flex align-items-stretch">
          <Nav />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
