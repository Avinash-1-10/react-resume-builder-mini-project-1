import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="template-select-container">
        <button onClick={() => navigate("/form", {state:{templateId: 'template1'}})} className="template-button">
          template 1
        </button>
        <button onClick={() => navigate("/form", {state:{templateId: 'template2'}})} className="template-button">
          template 2
        </button>
        <button onClick={() => navigate("/form", {state:{templateId: 'template3'}})} className="template-button">
          template 3
        </button>
        <button onClick={() => navigate("/form", {state:{templateId: 'template4'}})} className="template-button">
          template 4
        </button>
      </div>
    </>
  );
};

export default Home;
