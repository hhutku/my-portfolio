import React from 'react';


const ContactForm = () => {

  
    return (
        <div className="row justify-content-md-center">
            <section id="contact-section" className="col-md-6">
                <h1 className="contact">Contact to: Hasan Utku</h1>
                <hr></hr>
                <form className="justify-content-center" id="contact-form" >
                    <div>
                        <label htmlFor="name">name:</label>
                        <input className="form-control" type="text" name="name"   />
                    </div>
                    <div >
                        <label htmlFor="email">email:</label>
                        <input className="form-control" type="email" name="email"  />
                    </div>
                    <div>
                        <label htmlFor="message">message:</label>
                        <textarea className="form-control" name="message"  rows="10" />
                    </div>
                 
                    <div>
                        <button data-testid='button' className="btn btn-outline-light mt-4 submit-btn" type="submit" >Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactForm
