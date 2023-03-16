import React from 'react'
import './Template1.css'

const Template1 = ({data}) => {
  console.log('this is ', data)
  return (
    <>
    <div className="template1-container">
        <div className="template1-personalInfo-container">
            <h1 className="template1-name">{data.firstName} {data.lastName}</h1>
            <div className="template1-contacts">
            <h3 className="template1-number">{data.number}</h3>
            <h3 className="template1-email">{data.email}</h3>
            <h3 className="template1-age">{data.age} years</h3>
            </div>
            <div className="template1-education-container">
              <h1 className="template1-education-heading">Education Details</h1>
              <h3 className='template1-education'>{data.education}</h3>
            </div>
            <div className="template1-exp-container">
              <h1 className="template1-exp-heading">Job Experience</h1>
              <h3 className="template1-exp">{data.experience}</h3>
            </div>
            <div className="template1-summary-container">
              <h1 className="template1-summary-heading">Summary</h1>
              <p className="template1-summary">{data.summary}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Template1