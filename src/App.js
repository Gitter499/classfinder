import "./App.css";
import react from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
function App() {
  return (
    <react.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/submit">
            <Submit/>
          </Route>
          <Route path="*">
            <div>Whoops mate! This fucking page does not fucking exist! My fucking bad</div>
          </Route>
        </Switch>
      </Router>
    </react.Fragment>
  );
}

export default App;
