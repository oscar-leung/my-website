import logo from "./logo.svg";
import "./App.css";
import { Button, Link } from "@mui/material";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./components/theme";
import { ThemeProvider } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <NavBar></NavBar>

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
    </ThemeProvider>
  );
}

export default App;
