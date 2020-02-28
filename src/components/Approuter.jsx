import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import Header from './Header';
import WelcomePage from './WelcomePage';
function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/character">Character</Link>
            </li>
            <li>
                <Link to='/'>Home</Link>
                </li>
            <li>
              <Link to="/location">Locations</Link>
            </li>
          </ul>
        </nav>
        <WelcomePage/>
        <Header/>
        <Switch>
          <Route path="/location" component={LocationList} />
          <Route path="/character" component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;