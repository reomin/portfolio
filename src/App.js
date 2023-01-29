import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";




function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Resume" component={Resume} />
        <Route path="/AboutMe" component={AboutMe} />
      </Switch>
    </Router>

  );
}


export default App;