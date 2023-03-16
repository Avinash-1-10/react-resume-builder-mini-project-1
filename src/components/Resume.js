import React, { useState } from "react";
import "./Resume.css";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import Template4 from "./Template4";

const Resume = ({ allResume, setAllResume }) => {
  const [showTemplate, setShowTemplate] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedResumeIndex, setSelectedResumeIndex] = useState(null);

  const handleDelete = (id) => {
    setAllResume(allResume.filter((resume) => resume.id !== id));
  };

  const handlePreview = (index, resume) => {
    setSelectedResumeIndex(index);
    setSelectedTemplate(resume.temp);
    setShowTemplate(true);
  };

  return (
    <div className="resume-container">
      {allResume.map((resume, index) => {
        let resumeStyle = {};
        switch (resume.temp) {
          case "template1":
            resumeStyle.backgroundColor = "rgb(241, 127, 241)";
            break;
          case "template2":
            resumeStyle.backgroundColor = "rgb(88, 199, 247)";
            break;
          case "template3":
            resumeStyle.backgroundColor = "rgb(88, 247, 149)";
            break;
          case "template4":
            resumeStyle.backgroundColor = "rgb(247, 234, 88)";
            break;
          default:
            break;
        }
        return (
          <React.Fragment key={index}>
            <div style={resumeStyle} className="resume-box">
              <div className="resume">
                <h2>
                  {resume.firstName} {resume.lastName}
                </h2>
                <p>{resume.email}</p>
                <p>{resume.education}</p>
                <p>{resume.experience}</p>
              </div>
              <div className="btns">
                <button onClick={() => handleDelete(resume.id)}>Delete</button>
                <button>Edit</button>
                <button onClick={() => handlePreview(index, resume)}>Preview</button>
              </div>
            </div>
            {showTemplate && selectedTemplate === resume.temp && selectedResumeIndex === index && (
              <div className="template-preview">
                {selectedTemplate === "template1" && <Template1 data={resume} />}
                {selectedTemplate === "template2" && <Template2 data={resume} />}
                {selectedTemplate === "template3" && <Template3 data={resume} />}
                {selectedTemplate === "template4" && <Template4 data={resume} />}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Resume;
