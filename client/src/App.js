import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Navbar from "../src/Components/Navbar/Navbar";
import Login from "../src/Components/Login/Login";

function App() {
  const userName = localStorage.getItem("Username");
  const name = localStorage.getItem("name");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {userName && name ? (
              <>
                <Navbar name={name} userName={userName} />
                <Home name={name} userName={userName} />
              </>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/Login">
            {userName && name ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
