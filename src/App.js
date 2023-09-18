import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";





function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Project" component={Project} />
        <Route path="/Resume" component={Resume} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>

  );
}


export default App;