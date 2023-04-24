import React from 'react'
import './Services.css'

// icons
import * as GoIcons from 'react-icons/go'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'


const Services = () => {
    return (
        <div className='services-item'>
            <div className='services-item-image-container'></div>
            <div className='services-item-item-container'>
                <div className='services-item-item-element'>
                    <div className='services-item-item-element-icon-container'>
                        <GoIcons.GoShield className='services-item-item-element-icon'/>
                    </div>
                    <div className='services-item-item-element-body'>
                        <div className='services-item-item-element-body-header'>Home & Commercial Security</div>
                        <div className='services-item-item-element-body-separator'>
                            <div className='separator-pink'></div>
                        </div>
                        <div className='services-item-item-element-body-text'>
                            Keeps households and business operating without fear of external threats
                        </div>
                    </div>
                </div>

                <div className='services-item-item-element'>
                    <div className='services-item-item-element-icon-container'>
                        <RiIcons.RiMentalHealthFill className='services-item-item-element-icon'/>
                    </div>
                    <div className='services-item-item-element-body'>
                        <div className='services-item-item-element-body-header'>Mental Health Services</div>
                        <div className='services-item-item-element-body-separator'>
                            <div className='separator-pink'></div>
                        </div>
                        <div className='services-item-item-element-body-text'>
                            Focusing on empathy and providing companionship is central to a happy community
                        </div>
                    </div>
                </div>

                <div className='services-item-item-element'>
                    <div className='services-item-item-element-icon-container'>
                        <AiIcons.AiFillBug className='services-item-item-element-icon'/>
                    </div>
                    <div className='services-item-item-element-body'>
                        <div className='services-item-item-element-body-header'>Pest Control</div>
                        <div className='services-item-item-element-body-separator'>
                            <div className='separator-pink'></div>
                        </div>
                        <div className='services-item-item-element-body-text'>
                            Keeping sites clean is important to all communities
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default Services