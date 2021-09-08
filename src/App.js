import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";

function App() {
  return (
    //fragments
    <Router>
      {/* <Switch>
        <Home />
        <Page2 />
      </Switch> */}

      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/page1" component={Page1} /> */}
        {/* <Route path="/page2" component={Page2} /> */}
        <Route path="/contact" component={Signin} />
        {/* <Route path="/page3" component={Page3} /> */}
      </Switch>
    </Router>
  );
}

export default App;
