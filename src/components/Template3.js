import React from 'react'
import './Template3.css'

const Template3 = ({data}) => {
  console.log('this is ', data)
  return (
    <>
    <div className="template3-container">
        <div className="template3-personalInfo-container">
            <h1 className="template3-name">{data.firstName} {data.lastName}</h1>
            <div className="template3-contacts">
            <h3 className="template3-number">{data.number}</h3>
            <h3 className="template3-email">{data.email}</h3>
            <h3 className="template3-age">{data.age} years</h3>
            </div>
            <div className="template3-education-container">
              <h1 className="template3-education-heading">Education Details</h1>
              <h3 className='template3-education'>{data.education}</h3>
            </div>
            <div className="template3-exp-container">
              <h1 className="template3-exp-heading">Job Experience</h1>
              <h3 className="template3-exp">{data.experience}</h3>
            </div>
            <div className="template3-summary-container">
              <h1 className="template3-summary-heading">Summary</h1>
              <p className="template3-summary">{data.summary}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Template3
