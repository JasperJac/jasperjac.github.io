import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/App.css";
import Card from "./pages/Card";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { cartContent, contactsInformation, infoIcons } from "./components/data";

function App() {
  return (
    <Router>
      <div className="global">
        <div>
          <Header />
          <Switch>
            <Route exact path="/projects">
              <Card data={cartContent} />
            </Route>
            <Route exact path="/">
              <Profile data={contactsInformation} info={infoIcons} />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
export default App;
