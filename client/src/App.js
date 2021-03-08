import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

import './App.css'
function App() {
  return (
<div className="myApp">
    <Router>
      <div>
        <Switch>
          <Route exact path= "/portfolio" >
            <Portfolio  />
          </Route>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route >
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
   
    </div>
  );
}

export default App;