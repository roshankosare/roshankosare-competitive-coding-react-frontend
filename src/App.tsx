import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { AuthProvider } from "./context/authcontext";
import { Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/explore/ExplorePage";
import PostInfoPage from "./pages/postInfo/PostInfoPage";
import EditorPage from "./pages/editor/EditorPage";
import CreateProblemPage from "./pages/create-problem-page/CreateProblemPage";
import ProblemsPage from "./pages/problems/ProblemsPage";
import ProblemInfoPage from "./pages/problemInfo/ProblemInfoPage";
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
          <Route path="/createproblem" element={<CreateProblemPage/>}></Route>
          <Route path="/problems" element = {<ProblemsPage/>}></Route>
          <Route path="/problem" element = {<ProblemInfoPage/>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
