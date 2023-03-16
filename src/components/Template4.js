import React from 'react'
import './Template4.css'

const Template4 = ({data}) => {
  console.log('this is ', data)
  return (
    <>
    <div className="template4-container">
        <div className="template4-personalInfo-container">
            <h1 className="template4-name">{data.firstName} {data.lastName}</h1>
            <div className="template4-contacts">
            <h3 className="template4-number">{data.number}</h3>
            <h3 className="template4-email">{data.email}</h3>
            <h3 className="template4-age">{data.age} years</h3>
            </div>
            <div className="template4-education-container">
              <h1 className="template4-education-heading">Education Details</h1>
              <h3 className='template4-education'>{data.education}</h3>
            </div>
            <div className="template4-exp-container">
              <h1 className="template4-exp-heading">Job Experience</h1>
              <h3 className="template4-exp">{data.experience}</h3>
            </div>
            <div className="template4-summary-container">
              <h1 className="template4-summary-heading">Summary</h1>
              <p className="template4-summary">{data.summary}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Template4