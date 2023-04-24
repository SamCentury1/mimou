import React, {  useState } from 'react'
import {motion } from 'framer-motion'
import "./Navbar.css"
import * as FaIcons from 'react-icons/fa'

const Navbar = () => {


    const [aboutItemActive, setAboutItemActive] = useState(false)
    const [servicesItemActive, setServicesItemActive] = useState(false)


    const handleEnter = (e) => {
        if (e === "about") {
            setAboutItemActive(true)
        } else if (e === "services") {
            setServicesItemActive(true)
        }
    }

    const handleExit = (e) => {
        if (e === "about") {
            setAboutItemActive(false)
        } else if (e === "services") {
            setServicesItemActive(false)
        }        
    }



    // console.log(itemActive)
    return (
        <div className='navbar-container'>
            <div className='navbar-elem'>
                <div className='navbar-logo-container'>
                    <FaIcons.FaCat className='navbar-logo'/>
                </div>
                <div className='navbar-items-container'>

                    <motion.div 
                        className='navbar-item-container'
                        onMouseEnter={(e) => handleEnter('about')}
                        onMouseLeave={(e) => handleExit('about')}
                    >
                        <motion.div
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                        >About</motion.div>

                        <motion.div
                            className='nav-menu-item-container'
                            initial={{display:'none', opacity:0, y:-100}}
                            animate={aboutItemActive ? {display:'flex', opacity:[0,0,0,0,0,1], y:0} : {display: 'flex',opacity:0}}
                            transition={{duration:0.3}}
                            exit={{opacity:0}}
                        >
                            <motion.div 
                                className='nav-menu-item'
                                whileHover={{backgroundColor:'#000000'}}

                            >Our Team</motion.div>
                            <motion.div 
                                className='nav-menu-item'

                            >History</motion.div>
                            <motion.div 
                                className='nav-menu-item'
                                
                            >Values</motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='navbar-item-container'
                        onMouseEnter={(e) => handleEnter('services')}
                        onMouseLeave={(e) => handleExit('services')}
                    >
                        <motion.div
                            whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5'}}
                            initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                        >Services</motion.div>

                        <motion.div
                            className='nav-menu-item-container'
                            initial={{display:'none', opacity:0, y:-100}}
                            animate={servicesItemActive ? {display:'flex', opacity:[0,0,0,0,0,1], y:0} : {display: 'flex',opacity:0}}
                            transition={{duration:0.3}}
                            exit={{opacity:0}}
                        >
                            <motion.div 
                                className='nav-menu-item'
                                whileHover={{backgroundColor:'#000000'}}

                            >Security</motion.div>
                            <motion.div 
                                className='nav-menu-item'

                            >Mental Health</motion.div>
                            <motion.div 
                                className='nav-menu-item'
                                
                            >Pest Control</motion.div>
                        </motion.div>
                    </motion.div>


                    <motion.div 
                        className='navbar-item-container'
                        whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5'}}
                        initial={{color:'rgba(226, 226, 226, 0.747)', textShadow:""}}
                    >
                        Contact Us
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Navbar