import React from 'react'
import './Contact.css'

import Separator from '../Separator/Separator'

import * as AiIcons from 'react-icons/ai'

import {motion} from 'framer-motion'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='item-title'>Contact Us</div>
            <div className='contact-item'>

                <div className='contact-form-container'>
                    <div className='contact-form-icon-container'>
                        <AiIcons.AiOutlineMail className='contact-form-icon'/>
                    </div>

                    <div className='contact-form-body-container'>
                        <div className='contact-form-body-inputs-container'>
                            <div className='contact-form-body-input-container'>
                                <label htmlFor='' className='contact-form-label'>Name</label>
                                <input className='contact-form-input' type='text' />
                            </div>
                            <div className='contact-form-body-input-container'>
                                <label htmlFor='' className='contact-form-label'>Email</label>
                                <input className='contact-form-input' type='text' />
                            </div>
                            <div className='contact-form-body-input-container'>
                                <label htmlFor='' className='contact-form-label'>Company</label>
                                <input className='contact-form-input' type='text' />
                            </div>
                            <div className='contact-form-body-input-container'>
                                <label htmlFor='' className='contact-form-label'>Budget</label>
                                <div className='contact-form-budget-options'>
                                    <label  className='comtact-form-budget-option-label' htmlFor="small">$10K</label>
                                    <input className='contact-form-budget-input' type='radio' name='budget'/>

                                    <label  className='comtact-form-budget-option-label' htmlFor="small">$50K</label>
                                    <input className='contact-form-budget-input' type='radio' name='budget'/>

                                    <label  className='comtact-form-budget-option-label' htmlFor="small">100K</label>
                                    <input className='contact-form-budget-input' type='radio' name='budget'/>
                                </div>
                            </div>                            
                        </div>
                        <div className='contact-form-body-input-container'>
                            <label htmlFor='' className='contact-form-label'>Use Case</label>
                            <textarea className='contact-form-textarea' rows='10' cols='40' />
                        </div>    
                    </div>

                    <div className='contact-form-submit-container'>
                        <motion.div 
                            className='contact-form-submit-button'
                            whileHover={{backgroundColor: '#f81ce5'}}
                        >Submit
                        </motion.div>
                    </div>
                </div>

            </div>
            <Separator/>
        </div>
    )
}

export default Contact