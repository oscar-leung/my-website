import logo from "./logo.svg";
import "./App.css";
import { Button, Link } from "@mui/material";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"> Hello world!</Button>
        <NavBar></NavBar>
        {/* <HomePage></HomePage> */}
        {/* <BlogPage /> */}

        <Router>
          <div>
            <Link to="/home">Homepage</Link>
            <Routes>
              <Route path="/home">
                <HomePage />
              </Route>
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
