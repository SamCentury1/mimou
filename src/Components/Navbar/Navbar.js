import React, { useState } from 'react'
import {motion } from 'framer-motion'
import "./Navbar.css"
import * as FaIcons from 'react-icons/fa'
import mimouLogoWhite from '../../img/mimoulogo_white.png'

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

    

    const navVariants = {
        active: {
            x:0
        },
        inactive: {
            x:-300
        }
    }
    const [navMenuOpen,setNavMenuOpen] = useState(false)
    const handleNavClick = () => {
        setNavMenuOpen(!navMenuOpen)
    }


    if (window.innerWidth > 800) {

        return (
            <div className='navbar-container'>
                <div className='navbar-elem'>
                    <div className='navbar-logo-container'>
                        <img src={mimouLogoWhite}  width={60} height={60}  alt=""/>
                        {/* <FaIcons.FaCat className='navbar-logo'/> */}
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
                                animate={aboutItemActive ? {display:'block', opacity:[0,0,0,0,0,1], y:0} : {display: 'none',opacity:0}}
                                transition={{duration:0.3}}
                                exit={{opacity:0}}
                            >
                                <motion.div 
                                    className='nav-menu-item'
                                    whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5', cursor:'pointer'}}
    
                                >Our Team</motion.div>
                                <motion.div 
                                    className='nav-menu-item'
                                    whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5', cursor:'pointer'}}
    
    
                                >History</motion.div>
                                <motion.div 
                                    className='nav-menu-item'
                                    whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5', cursor:'pointer'}}
                                    
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
                                animate={servicesItemActive ? {display:'block', opacity:[0,0,0,0,0,1], y:0} : {display: 'none',opacity:0}}
                                transition={{duration:0.3}}
                                exit={{opacity:0}}
                            >
                                <motion.div 
                                    className='nav-menu-item'
                                    whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5', cursor:'pointer'}}
    
                                >Security</motion.div>
                                <motion.div 
                                    className='nav-menu-item'
                                    whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5', cursor:'pointer'}}
    
                                >Mental Health</motion.div>
                                <motion.div 
                                    className='nav-menu-item'
                                    whileHover={{color:'#ffffff', textShadow:'0 0 5px #FFFFFF, 0 0 10px #f81ce5', cursor:'pointer'}}
                                    
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
    } else {
        return (
            <div className='mobile-navbar-container'>
                <FaIcons.FaCat className='mobile-navbar-logo' onClick={handleNavClick}/>
                <motion.div 
                    className='mobile-navbar-elem'
                    initial={"inactive"}
                    animate={navMenuOpen ?  "active" : "inactive"}
                    transition={{duration:0.3}}
                    variants={navVariants}
                    style={{zIndex:10000}}
                >
                    <div className='mobile-navbar-items-container'>
                        <div className='mobile-navbar-item-container'>
                            <div className='mobile-nav-menu-elem'>About</div>
                            <div className='mobile-nav-menu-item-container'>
                                <motion.div 
                                    className='mobile-nav-menu-item'
                                    whileHover={{scale:1.1}}
                                >Our Team</motion.div>
                                <motion.div 
                                    className='mobile-nav-menu-item'
                                    whileHover={{scale:1.1}}
                                >History</motion.div>
                                <motion.div 
                                    className='mobile-nav-menu-item'
                                    whileHover={{scale:1.1}}
                                >Values</motion.div>
                            </div>
                        </div>
                    </div>

                    <div className='mobile-navbar-items-container'>
                        <div className='mobile-navbar-item-container'>
                            <div className='mobile-nav-menu-elem'>Services</div>
                            <div className='mobile-nav-menu-item-container'>
                                <motion.div 
                                    className='mobile-nav-menu-item'
                                    whileHover={{scale:1.1}}
                                >Security</motion.div>
                                <motion.div 
                                    className='mobile-nav-menu-item'
                                    whileHover={{scale:1.1}}
                                >Mental Health</motion.div>
                                <motion.div 
                                    className='mobile-nav-menu-item'
                                    whileHover={{scale:1.1}}
                                >Pest Control</motion.div>
                            </div>
                        </div>
                    </div>


                </motion.div>
            </div>
            )
    }
}

export default Navbar