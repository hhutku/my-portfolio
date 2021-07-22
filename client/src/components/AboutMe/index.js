import React from 'react'
import { myPhoto } from '../../images/images'
import './style.css'

const index = () => {
  return (
    <div className='main'>
      <h1 className='aboutMe'> Hasan Utku</h1>
      <hr></hr>

      <div className='row justify-content-center paragraphs'>
        <div className='col-10' id='about-section'>
          <img
            style={{ width: 250 }}
            className='mb-5'
            src={myPhoto}
            alt='Hasan Utku'
          />
          <p>
            Full-stack web developer with skills in React, JavaScript, Express,
            node.js, and MongoDB and QA Tester with skills Selenium Java,
            WebDriver, JUnit, Cucumber, API Restful. A non-stop learner and a
            dedicated teacher with a new passion (Web-Development).
          </p>
          <p>
            As a QA Automation Engineer I have experience with Manual and
            Automated testing with tools Such as Selenium Web Driver, Junit,
            JIRA, Maven, Cucumber, Web Services (REST) Extensive knowledge on
            Quality Assurance standards, methodologies and strategies with
            better understanding of Software Development Life Cycle (SDLC) and
            Software Testing .
          </p>

          <p>
            View full{' '}
            <a
              href='https://drive.google.com/file/d/1r-zmowiBqAOHo5Q3WlwOl7BnFir2uq0o/view?usp=sharing'
              className='link'
            >
              resume
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
