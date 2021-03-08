import React from 'react';
import './style.css'

function MyResume() {

    return (
        <div className="row justify-content-md-center">
            <div className=" col-lg-10 col-md-6">
                <h1 className="summary"> Professional Summary </h1>
                <ul className="resume" >
                    <h3 > View full <a href="https://hhutku.github.io/portfolio/assets/images/resumeNov.pdf" className="link"><span style={{color:"aqua"}}>resume</span></a>
                    </h3>
                    <br />
                    <h3>Front-end Experience</h3>
                    <li>HTML, CSS (Bootstrap), JavaScript, jQuery, React.js, IndexedDB</li>
                    <br />
                    <h3>Back-end Experience</h3>
                    <li>
                        Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </li>

                    <br />
                    <h3>QA Experience</h3>
                    <li>QA Automation Tester including Manual and Automated testing with tools Such
                    as Selenium Web Driver and Junit, TestNG, JIRA, Maven, Jenkins, Cucumber, Web
Services (REST).</li>
                    <li>Extensive knowledge on Quality Assurance standards, methodologies and
                    strategies with better understanding of Software Development Life Cycle (SDLC)
                    and Software Testing Life Cycle (STLC) as well as Agile/Scrum across the span of
multiple projects.</li>
                    <li>Practical experience with Creating Test Scenarios, Cases and User Stories, Smoke
                    Testing and Regression Testing, System testing, Functional testing, and GUI testing
based on Project Requirements.</li>
                    <li>Proficient in using test automation tools such as Selenium WebDriver to develop
automation testing scripts for web and client server applications.</li>
                    <li>Experienced in working on Selenium WebDriver automation script in Java for Page
                    Object Model (POM) testing. Used testing annotations to group the test methods
and for cross-browser.</li>
                    <li>Proficient in creating, enhancing and maintaining test scripts for various functional
and regression testing using Selenium WebDriver.</li>
                    <li>Experienced in developing and enhancing different types of Automation
                    Frameworks such as Data Driven and Hybrid Frameworks using Selenium
WebDriver and Java (POM and BDD)</li>
                </ul>
               
            </div>
        </div>
    );
}

export default MyResume;