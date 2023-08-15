
import AboutMe from "./components/aboutMe";
import Home from "./components/home";
import Header from "./components/header";
import { Routes, Route, Link } from "react-router-dom";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </div>
  );
}

export default App;
