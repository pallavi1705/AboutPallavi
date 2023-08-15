import { Routes, Route } from "react-router-dom";

import AboutMe from "./components/aboutMe";
import Home from "./components/home";
import Header from "./components/header";
import Skills from "./components/skills";
import Contact from "./components/contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
