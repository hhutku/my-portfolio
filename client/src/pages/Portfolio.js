import React from 'react'
import myworks from '../portfolio.json'
import Projects from '../components/Projects'
const Portfolio = () => {
    return (
        <div>
           <Projects>
               
            {myworks.map((project) => (
         <div> 
         <p key={project.id} >{project.id} </p>
         <p>{project.name} </p>
         <p>{project.deploy} </p>
         <p>{project.topics}</p>
         </div>
            ))}
            
            </Projects>
        </div>
    )
}

export default Portfolio
