import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WelcomPage from "./pages/WelcomPage";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
