import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NonExist from "./components/NonExist";
import Preview from "./components/Preview";
import Resume from "./components/Resume";

const App = () => {
  const [allResume, setAllresume] = useState([])
  return (
    <>

      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume allResume={allResume} setAllResume={setAllresume}/>} />
          <Route path="/form" element={<Form allResume={allResume} setAllresume={setAllresume}/>} />
          <Route path='/preview' element={<Preview/>} />
          <Route path="/*" element={<NonExist/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
