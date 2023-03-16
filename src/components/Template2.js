import React from 'react'
import './Template2.css'

const Template2 = ({data}) => {
  console.log('this is ', data)
  return (
    <>
    <div className="template2-container">
        <div className="template2-personalInfo-container">
            <h1 className="template2-name">{data.firstName} {data.lastName}</h1>
            <div className="template2-contacts">
            <h3 className="template2-number">{data.number}</h3>
            <h3 className="template2-email">{data.email}</h3>
            <h3 className="template2-age">{data.age} years</h3>
            </div>
            <div className="template2-education-container">
              <h1 className="template2-education-heading">Education Details</h1>
              <h3 className='template2-education'>{data.education}</h3>
            </div>
            <div className="template2-exp-container">
              <h1 className="template2-exp-heading">Job Experience</h1>
              <h3 className="template2-exp">{data.experience}</h3>
            </div>
            <div className="template2-summary-container">
              <h1 className="template2-summary-heading">Summary</h1>
              <p className="template2-summary">{data.summary}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Template2
