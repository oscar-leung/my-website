import logo from "./logo.svg";
import "./App.css";
import { Button, Link } from "@mui/material";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import theme from "./components/theme";
import { ThemeProvider } from "@mui/system";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
          </header>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact-me" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
