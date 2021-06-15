import "./App.css";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import BarMenu from "./Components/BarMenu";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import ComingSoon from "./Components/Pages/ComingSoon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SocialFooter from "./Components/SocialFooter";
import { Fragment } from "react";
import Projects from "./Components/Pages/Projects";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <Landing />
                <Work />
                <Skills />
                <Footer />
              </Fragment>
            )}
          />

          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/coming-soon' component={ComingSoon} />
        </Switch>

        <SocialFooter />
        <BarMenu />
      </div>
    </Router>
  );
}

export default App;
