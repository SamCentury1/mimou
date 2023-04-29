import React from 'react'
import {motion} from 'framer-motion'
import './Values.css'
import Separator from '../Separator/Separator'

const Values = () => {
    return (
        <motion.div 
            className='values-container'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.3, delay:0.3}}
        >
            <div className='item-title'>Core Values</div>
            <div className='values-item'>
                <motion.div 
                    className='values-item-item-container'
                    initial={{opacity:0, }}
                    whileInView={{opacity:1, }}
                    transition={{duration: 0.3, delay:0.6}}
                >
                    <div className='values-item-item-header'>
                        <div className='values-item-item-header-text'>Courage</div>
                    </div>
                    <div className='values-item-item-separator'>
                        <div className='separator-pink'></div>
                    </div>
                    <div className='values-item-item-body'>
                        <div className='values-item-item-body-text'>
                            The fundamental tenent which makes threats leave and customers stay  
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className='values-item-item-container'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.3, delay:0.9}}
                >
                    <div className='values-item-item-header'>
                        <div className='values-item-item-header-text'>Dexterity</div>
                    </div>
                    <div className='values-item-item-separator'>
                        <div className='separator-pink'></div>
                    </div>
                    <div className='values-item-item-body'>
                        <div className='values-item-item-body-text'>
                            Contracts are dispatched with the utmost care and agility. No cleanup is ever needed  
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className='values-item-item-container'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration: 0.3, delay:1.2}}
                >
                    <div className='values-item-item-header'>
                        <div className='values-item-item-header-text'>Intelligence</div>
                    </div>
                    <div className='values-item-item-separator'>
                        <div className='separator-pink'></div>
                    </div>
                    <div className='values-item-item-body'>
                        <div className='values-item-item-body-text'>
                            Home and commercial security is a function of data driven initiatives and science.
                        </div>
                    </div>
                </motion.div>
            </div>
            <Separator/>
        </motion.div>
    )
}

export default Values