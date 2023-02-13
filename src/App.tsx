import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { AuthProvider } from "./context/authcontext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
      </AuthProvider>
    </div>
  );
}

export default App;
