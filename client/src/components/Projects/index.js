import React from 'react'
import './style.css'

const Projects = (props) => {
    return (
        <div className="wrapper">
            <div className="project">
                <h1 className="title">My Portfolio</h1>
                <hr></hr>
            </div>

            <div>
                <div className="container-fluid">
                    <div className="row"> {props.children}</div>
                </div>


            </div>
        </div>
    )


}

export default Projects
