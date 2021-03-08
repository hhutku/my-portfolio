import React from 'react'
import Projects from '../components/Projects'
import myworks from '../portfolio.json'
import ProjectCards from '../components/ProjectCards'

const Portfolio = () => {
    return (
        <div>
            <Projects>
            {myworks.map((project) => (
            //   <ProjectCards key={project.id} id={project.id} name={project.name}  deploy={project.deploy} topics={project.topics}/>
            <ProjectCards project={project}  key={project.id}/>
            ))}
            </Projects>
        </div>
    )
}

export default Portfolio
