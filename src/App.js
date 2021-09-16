import "./styles.css";
import { Link,Switch,BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./Home";
import TimerComponent from './TimerComponent';
import CardComponent from "./CardComponent";

export default function App() {
 return(
<div>   
  <Router>
    <div>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/home">App</Link>
      </li>
      <Switch>
        {/* <Route path="/about">
        <About />
        </Route> */}
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
    </div>
  </Router>
</div>
);
}
