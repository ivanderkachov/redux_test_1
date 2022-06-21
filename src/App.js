import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import store from "./redux"
import Dummy from "./components/dummy"
import Readme from "./components/readme"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path = "/" component={() => <Dummy />} />
          <Route exact path = "/:repos" component={() => <Readme />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App
