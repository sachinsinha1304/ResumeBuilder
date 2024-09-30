import React,{useEffect} from 'react'
import './../css/Resume.css'
import Certificate from './Certificate'


function Review({details}) {

    
    return (
      <div>
                {/* general information */}
                <div className="basic-intro">
                  <h1>{details.name}</h1>
                  <p>{details.email} | {details.contact} | {details.address} | {details.city} | {details.pincode} | {details.state}</p>
                </div>
                {/* intro summary */}
                <div className='mark-individual-partition'>
                  <div className='row'>
                    <div className='col-3'><h4>Summary</h4></div>
                    <div className='col-9'>{details.intro}</div>
                  </div>
                </div>
                {/* education */}
                <div className='mark-individual-partition'>
                  <div className='row'>
                    <div className='col-3'><h4>Education</h4></div>
                    <div className='col-9'>
                      {details.education.map(element=>
                        <div key={element.id}>
                          Completed {element.value.degree} from <strong>{element.value.name}</strong> with {element.value.cgpa} percentile during <strong>{element.value.startDate} - {element.value.endDate}</strong>.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Experience */}
                <div className='mark-individual-partition'>
                  <div className='row'>
                    <div className='col-3'><h4>Work Experience</h4></div>
                    <div className='col-9'>
                      {details.experience.map(element=>
                        <div key={element.id}>
                          <strong>{element.value.name}</strong>(<strong>{element.value.startDate} - {element.value.endDate}</strong>)
                          <ul>
                            <li>Position : {element.value.position}</li>
                            <li>Role & Responsibilities : {element.value.role}</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Cerifications */}
                <div className='mark-individual-partition'>
                  <div className='row'>
                    <div className='col-3'><h4>Certifications</h4></div>
                    <div className='col-9'>
                      {details.certificate.map(element=>
                        <div key={element.id}>
                          <a href={element.value.url}><strong>{element.value.course}</strong></a> from {element.value.name} ({element.value.startDate} - {element.value.endDate})
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Skills */}
                <div className='mark-individual-partition-end'>
                  <div className='row'>
                    <div className='col-3'><h4>Skills</h4></div>
                    <div className='col-9'>
                      <div className='row'>
                        {details.skills.map(element=>
                          <div className='col-4' key={element.id}>
                            <strong>{element.name}</strong>
                          </div>
                        )}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default Review