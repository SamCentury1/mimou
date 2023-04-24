import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'

import "./Landing.css"

const Landing = () => {

    const variants = {
        visible: { opacity: 1, y:'100%'},
        hidden: { opacity: 0, y:500 },
    }


    const myRef = useRef();
    const parentRef = useRef()


    const [scale,setScale] = useState()

    const getPosition = () => {



        const height = myRef.current.offsetHeight

        const parentHeight = parentRef.current.offsetHeight

        return {height,parentHeight}

    };

      // Get the position of the red box in the beginning
    useEffect(() => {
        //getPosition();
        window.addEventListener("scroll", function(e) {
            const data = getPosition()
            const parentContainerCenter = data.parentHeight/2
            const targetElemCenter = parentContainerCenter + (data.height)
            const distanceBetweentargetCenterAndContainerCenter = targetElemCenter - parentContainerCenter


            // console.log(window.pageYOffset)
            if (window.pageYOffset < parentContainerCenter) {
                setScale(1)
            } else {
                const scale = Math.abs((window.pageYOffset-targetElemCenter) / distanceBetweentargetCenterAndContainerCenter)
                setScale(scale)
            }
        })
    }, []);



    return (
            <div className='landing-item'  ref={parentRef}>
                <div className='landing-item-overlay'></div>
                <motion.div
                    className='landing-item-text-container'
                    variants={variants}
                    initial="hidden"
                    animate={"visible"}
                    transition={{ duration: 0.6, delay:0.3}}
                    whileInView={{opacity:1}}
                    ref={myRef}
                    style={{scale:scale, opacity:0}}
                >
                    <motion.div 
                        className='landing-item-text'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{ duration: 0.6, delay:0.6}} 
                    >
                        Mimou Security Services
                    </motion.div>

                    <motion.div 
                        className='landing-item-subtext'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{ duration: 0.6, delay:0.9}} 
                    >
                        Committed to protecting your home and community
                    </motion.div>

                    <div className='landing-btn-container'>
                        <motion.div 
                            className='landing-btn'
                            whileHover={{backgroundColor:'#f81ce5'}}
                        >
                            Request a Quote
                        </motion.div>

                        <motion.div 
                            className='landing-btn'
                            whileHover={{backgroundColor:'#f81ce5'}}
                        >
                            Book a Consultation
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        )
}

export default Landing
