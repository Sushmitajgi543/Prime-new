import React from 'react'
import "./Formsection.scss"
import contactpattern from '../../../assets/Image/contact-pattern.png';

function FormSection() {
  return (
    <div className='form-section'>
        <div className="form-section-left">
                <h1>We’d love to hear from you.</h1>
                    <span>  <img src={contactpattern} alt="" /></span>
            </div>
            <div className="form-section-right">
                <form className='form-section-right-form'>
                    <div className="form-section-right-form-group">
                        <input type="text" id="name" placeholder='Name*' />
                    </div>
                    <div className="form-section-right-form-group">
                        <input type="email" id="email" placeholder='Email*' />
                    </div>
                    <div className="form-section-right-form-group">
                        <input type="text" id="message" placeholder='Message' />
                    </div>
                    <div className="form-section-right-form-group">
                        <button type="submit">Submit &rarr;</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default FormSection