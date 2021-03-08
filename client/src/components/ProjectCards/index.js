import React from 'react'
import {images} from '../../images/images'
const ProjectCards = ({ project }) => {

  return (

    <div className="col-lg-4 "   >
      <img src={images[parseInt(project.id)]}   className="card-img-top" alt={project.name} />
      <p>{project.name}</p>
      <p>{project.id}</p>
      <p>{project.topics}</p>
      <p>{project.deploy}</p>
<hr></hr>
<br/>
    </div>
  )
}

export default ProjectCards
