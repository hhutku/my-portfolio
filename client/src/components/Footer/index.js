import React from 'react'
import './style.css'

const index = () => {
    return (

        <section id="footer" className="bg-dark" >
            <div className="container ">
         
                <div className="row justify-content-md-center align-items-center p-3">
                    <div className="col col-lg-1">
                    <a  href="https://github.com/hhutku/"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                    </div>
                    <div className="col col-lg-1">
                    <a  href="https://www.linkedin.com/in/hasan-utku-18922b1ab/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
                    </div>
                    <div className="col col-lg-1">
                    <a  href="mailto:hhutku.wa@gmail.com"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" className="icon"/></a>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                  
                    <div className="text-center p-3" >
                                 © 2021 Copyright hhutku
  
                     </div>
                 
                </div>
                <hr></hr>
            </div>
        </section>
    )
}

export default index