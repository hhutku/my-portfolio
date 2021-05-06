import React from 'react'
import {images} from '../../images/images'
import './style.css'

const ProjectCards = ({project}) => {

  return (
    
      <div  className="col-lg-4 col-md-6 mt-4 cards "    >
        <div className="cardContainer" >
       
        <img style={{ height: 300 }} src={images[parseInt(project.id)]}   className="card-img-top" alt={project.name} />
        <div  className="card-body ">
          <a  href={project.github}><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
          <a href={project.deploy}><img src="https://img.icons8.com/color/48/000000/heroku.png" alt="Deployed Site" id="project-icon" /><span className="card-title ">{project.name}</span></a>
          <br/>
          <br/>
          <p>{project.explain}</p>
          <p className="topics">{project.topics}</p>
          

        </div>
        </div>
      </div>
     
   

  )
}

export default ProjectCards
