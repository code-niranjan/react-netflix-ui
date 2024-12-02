
import React from 'react'
import './CTA.css'

export const CTA = () => {
    return (
        <>
            <div className="cta-box">
                <div className="cta-text">Ready to watch? Enter your email to create or restart your membership.</div>
                <div className="cta-input-button-box">
                    <div className="cta-email-input">
                        <input className='cta-input' type="email" name="" id=""  />
                        <label htmlFor="input" className='input-label'>Email address</label>
                        <a href="#popular-now">
                        <div className="cta-button">
                            <button type='text' >
                                Get Started
                                <i className="fa-solid fa-chevron-right "></i>
                            </button>
                        </div>
                        </a>
 
                    </div>
                </div>
            </div>

        </>
    )
}
