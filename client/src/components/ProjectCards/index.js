import React from 'react'

const ProjectCards = ({ project }) => {

  return (

    <div className="col-lg-4 "   >
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
