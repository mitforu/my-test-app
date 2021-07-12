import React from "react";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import Child from "./Child";
import {
   BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

           <Route path="/test/:id"
           render={({match, locations}) => {
           const id = match.params.id;
           console.log(id);
           return <Redirect to={`/child/${id}`}/>;
           }}
           />


           <Route path="/child/:id">
            <Child/>
           </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
