import React from "react";
import Home from "./Home"
import { BrowserRouter as Router, useLocation } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <SecretMessageService />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SecretMessageService() {
  let query = useQuery();
  return (
    <div className="bg_image">
      <Home id={query.get("rs")} />
    </div>
  );
}
