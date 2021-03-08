import React from 'react'
import {myPhoto} from '../../images/images'
import './style.css'

const index = () => {
    return (
        <div>
                    
      <h1 className="aboutMe"> Hasan Utku</h1>
      <hr></hr>
      
      <div className="row justify-content-center paragraphs">
        <div className="col-10" id="about-section">
        <img style={{width:250}}className="mb-5" src={myPhoto} alt="Hasan Utku"/>  
        <p>
        Web Developer coming from a background in QA Automation. Skilled in Java, Selenium, MySQL, RestAPI,HTML, CSS, Javascript, jQuery, AJAX, NodeJS and more..
        </p>
        <p>
        As a QA Automation Engineer I have experience with Manual and Automated testing with tools Such as Selenium Web Driver, Appium and Junit, JIRA, Maven, Jenkins, Cucumber, Web Services (REST) Extensive knowledge on Quality Assurance standards, methodologies and strategies with better understanding of Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) as well as Agile/Scrum across the span of multiple projects.
        </p>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
   
      <p>
            View full <a href="https://hhutku.github.io/portfolio/assets/images/resumeNov.pdf"className="link">resume</a>

          
    </p>
      </div>  
      </div>
        </div>
    )
}

export default index
