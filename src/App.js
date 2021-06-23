import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Resume} />
    </Router>
  );
}

export default App;
