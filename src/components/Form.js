import React, { useState } from "react";
import './Form.css'
import { useLocation, useNavigate } from "react-router-dom";

const Form = ({allResume,setAllresume}) => {
  const location = useLocation()
  const tempId = location.state.templateId;
  const naviagte = useNavigate()
  const [formData, setFormData] = useState({
    id:Math.floor(Math.random()*10e4),
    firstName: '',
    lastName: '',
    age: '',
    number: '',
    email: '',
    experience: '',
    education: '',
    summary: '',
    temp: tempId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    setAllresume([formData,...allResume])
    naviagte('/preview', {state:formData})
  }

  return (
    <div className="form-main-container">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={handleChange} value={formData.firstName} />
        </div>
        <div className="box">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={handleChange} value={formData.lastName} />
        </div>
        <div className="box">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" onChange={handleChange} value={formData.age} />
        </div>
        <div className="box">
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" name="number" onChange={handleChange} value={formData.number} />
        </div>
        <div className="box">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div className="box">
          <label htmlFor="education">Education Qualification</label>
          <input type="text" id="education" name="education" onChange={handleChange} value={formData.education} />
        </div>
        <div className="box">
          <label htmlFor="exp">Job Experience</label>
          <input type="text" id="exp" name="experience" onChange={handleChange} value={formData.experience} />
        </div>
        <div className="box">
          <label htmlFor="summary">Summary</label>
          <textarea name="summary" id="summary" cols="30" rows="10" onChange={handleChange} value={formData.summary}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
