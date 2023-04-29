import React from 'react'
import {motion} from 'framer-motion'
import './Mission.css'
import Separator from '../Separator/Separator'

const Mission = () => {
    return (
        <div className='mission-container'>

            <div className='item-title'>Mission</div>
            <div className='mission-item'>
                <motion.div 
                    className='mission-item-text-container'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 0.6, delay:0.3}} 
                    style={{}}                      
                >
                    <div className='mission-item-text-header'>Keeping communities safe, happy and clean</div>
                    <div className='mission-item-text-body'>
                        The most important result of any contract is leaving the customer 
                        happy, safe, and clean.

                        Happy clients are important in their communities and set the example for
                        others.

                        We at Mimou Security Services, are proud to make a difference in the day-to-day of
                        businesses and communities
                    </div>
                </motion.div> 

                <div className='mission-item-picture-container'>
                    <motion.div
                        className='mission-item-picture-image'
                        initial={{ opacity: 0, x:0, y:50}}
                        whileInView={{ opacity: 1, x:0, y:0 }} 
                        transition={{ duration: 0.6, delay:0.3}}                 
                        >
                    </motion.div>  
                    {/* <motion.div
                        className='mission-item-picture-shape'
                        initial={{ opacity: 0,x:0, y:50 }}
                        whileInView={{ opacity: 1,x:0, y:0 }} 
                        transition={{ duration: 0.6, delay:0.3}}                 
                    >
                    </motion.div>               */}
                </div>
            </div>
            <Separator/>
        </div>
    )
}

export default Mission