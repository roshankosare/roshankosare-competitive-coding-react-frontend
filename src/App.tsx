import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { AuthProvider } from "./context/authcontext";
import { Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/explore/ExplorePage";
import PostInfoPage from "./pages/postInfo/PostInfoPage";
import EditorPage from "./pages/editor/EditorPage";
function App() {
  return (
    <div className=" bg-slate-200 min-h-screen pb-10">
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>}></Route>

          <Route path="/explore" element={<ExplorePage/>}></Route>
          <Route path="/post" element={<PostInfoPage />}></Route>
          <Route path="/editor" element={<EditorPage />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
