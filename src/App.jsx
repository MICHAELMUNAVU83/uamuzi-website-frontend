import { useState } from "react";
import "./App.css";
import SplashScreen from "./pages/SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
