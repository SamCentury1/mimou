import React from 'react'
import './Services.css'
import {motion} from 'framer-motion'

// icons
import * as GoIcons from 'react-icons/go'
import * as RiIcons from 'react-icons/ri'
// import * as AiIcons from 'react-icons/ai'

import Separator from '../Separator/Separator'


const Services = () => {
    return (
        <div className='services-container'>
            <div className='item-title'>Services</div>
            <div className='services-item'>

                    <div className='services-item-item-container'>
                        <motion.div 
                            className='services-item-item-element-image img-1' 
                            initial={{x:30, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{ duration: 0.6, delay:0.3}}     
                        ></motion.div>
                        <motion.div 
                            className='services-item-item-element'
                            initial={{x:30, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{ duration: 0.3, delay:0.6}}   
                            >
                            <div className='services-item-item-element-header'>
                                <div className='services-item-item-element-icon-container'>
                                    <GoIcons.GoShield className='services-item-item-element-icon'/>
                                </div>
                                <div className='services-item-item-element-body-header'>Home & Commercial Security</div>
                            </div>
                                <div className='services-item-item-element-body-separator' style={{height:'5%'}}>
                                    <div className='separator-pink'></div>
                                </div>
                            <div className='services-item-item-element-body'>
                                <div className='services-item-item-element-body-text'>
                                    <ul>
                                        <li>Keeps households and business operating without fear of external threats</li>
                                        <li>24h Security - daily security posture reports</li>
                                    </ul>
                                </div>
                                <div className='services-item-learnmore-container'>
                                    <motion.div 
                                        className='services-item-learnmore-button'
                                        whileHover={{backgroundColor:'#f81ce5', border:'none'}}
                                    >
                                        Learn More
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div >
                    </div>

                    <div className='services-item-item-container'>

                        <motion.div 
                            className='services-item-item-element'
                            initial={{x:-30, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{ duration: 0.3, delay:0.6}}   
                            >
                            <div className='services-item-item-element-header'>
                                <div className='services-item-item-element-icon-container'>
                                    <RiIcons.RiMentalHealthLine className='services-item-item-element-icon'/>
                                </div>
                                <div className='services-item-item-element-body-header'>Mental Health Services</div>
                            </div>
                                <div className='services-item-item-element-body-separator' style={{height:'5%'}}>
                                    <div className='separator-pink'></div>
                                </div>
                            <div className='services-item-item-element-body'>
                                <div className='services-item-item-element-body-text'>
                                    <ul>
                                        <li>Achieve peace of mind with licensed a Zootherapist</li>
                                        <li>Increase self-worth with Cuddletherapy</li>
                                    </ul>
                                </div>
                                <div className='services-item-learnmore-container'>
                                    <motion.div 
                                        className='services-item-learnmore-button'
                                        whileHover={{backgroundColor:'#f81ce5', border:'none'}}
                                    >
                                        Learn More
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div >

                        <motion.div 
                            className='services-item-item-element-image img-2' 
                            initial={{x:-30, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{ duration: 0.6, delay:0.3}}     
                        ></motion.div>
                    </div>

                    <div className='services-item-item-container'>
                        <motion.div 
                            className='services-item-item-element-image img-3' 
                            initial={{x:30, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{ duration: 0.6, delay:0.3}}     
                        ></motion.div>
                        <motion.div 
                            className='services-item-item-element'
                            initial={{x:30, opacity:0}}
                            whileInView={{x:0, opacity:1}}
                            transition={{ duration: 0.3, delay:0.6}}   
                            >
                            <div className='services-item-item-element-header'>
                                <div className='services-item-item-element-icon-container'>
                                    <RiIcons.RiBugFill className='services-item-item-element-icon'/>
                                </div>
                                <div className='services-item-item-element-body-header'>Pest Control Services</div>
                            </div>
                                <div className='services-item-item-element-body-separator' style={{height:'5%'}}>
                                    <div className='separator-pink'></div>
                                </div>
                            <div className='services-item-item-element-body'>
                                <div className='services-item-item-element-body-text'>
                                    <ul>
                                        <li>Tailor-made treatment plans to suit your needs.</li>
                                        <li>With Mimou, there’s nowhere for pests to hide</li>
                                    </ul>
                                </div>
                                <div className='services-item-learnmore-container'>
                                    <motion.div 
                                        className='services-item-learnmore-button'
                                        whileHover={{backgroundColor:'#f81ce5', border:'none'}}
                                    >
                                        Learn More
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div >
                    </div>

            </div>
            <Separator/>
        </div>
    )
}

export default Services