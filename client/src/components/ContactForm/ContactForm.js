import React, { useState } from 'react';
import axios from 'axios'
import './style.css'

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('please enter a valid email');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log(formState)
        }
    }

    function handleSubmit() {
    
        axios.post("/api/sendemail",formState)
        setFormState({ name: '', email: '', message: '' })
    }
    return (
        <div className="row justify-content-md-center">
            <section id="contact-section" className=" col-md-6">
                <h1 className="contact">Contact to: Hasan Utku</h1>
                <hr></hr>
                <form className="justify-content-center" id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">name:</label>
                        <input className="form-control" type="text" name="name"  defaultalue={name} onBlur={handleChange} />
                    </div>
                    <div >
                        <label htmlFor="email">email:</label>
                        <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">message:</label>
                        <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="10" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    <div>
                        <button data-testid='button' className="btn btn-outline-light mt-4 submit-btn" type="submit" >Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactForm
