import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import { Button } from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Router>
            <nav>
              <Button variant="outlined">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="outlined">
                <Link to="portfolio">Portfolio</Link>
              </Button>
              <Button variant="outlined">
                <Link to="resume">Resume</Link>
              </Button>
              <Button variant="outlined">
                <Link to="blog">Blog</Link>
              </Button>
              <Button variant="outlined">
                <Link to="contact-me">Contact Me</Link>
              </Button>
            </nav>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact-me" element={<ResumePage />} />
              <Route path="*" element={<ErrorBoundary />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </header>
    </div>
  );
}
