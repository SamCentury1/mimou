import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import Separator from '../Separator/Separator'

import "./Landing.css"

import MimouLogoWhite from '../../../../img/mimoulogo_white.png'

const Landing = () => {

    const variants = {
        visible: { opacity: 1, y:'50%'},
        hidden: { opacity: 0, y:500 },
    }


    const myRef = useRef();
    const parentRef = useRef();
    const bgImageRef = useRef();
    const containerRef = useRef()


    const [scale,setScale] = useState()
    const [bgImageOpacity,setBgImageOpacity] = useState()
    // const [showBgImage,setShowBgImage] = useState('fixed')

    const getPosition = () => {



        const height = myRef.current.offsetHeight

        const parentHeight = parentRef.current.offsetHeight

        const bgImageHeight = bgImageRef.current.offsetHeight

        const containerHeight = containerRef.current.offsetHeight

        return {height,parentHeight,bgImageHeight,containerHeight}

    };

      // Get the position of the red box in the beginning
    useEffect(() => {
        //getPosition();
        window.addEventListener("scroll", function(e) {
            const data = getPosition()
            const parentContainerCenter = data.parentHeight/2
            const targetElemCenter = parentContainerCenter + (data.height)
            const distanceBetweentargetCenterAndContainerCenter = targetElemCenter - parentContainerCenter

            if (window.pageYOffset < parentContainerCenter) {
                setScale(1)
                setBgImageOpacity(1)

            } else {
                const scale = ((window.pageYOffset-targetElemCenter) / distanceBetweentargetCenterAndContainerCenter)

                setScale(scale*-1)
                setBgImageOpacity(scale*-1)

                if (window.pageYOffset >  data.bgImageHeight) {
                    setScale(0)
                }

                if (scale*-1 < 0) {
                    // setShowBgImage(0)
                    setBgImageOpacity(0)
                }

           
            }
        })
    }, []);


    return (
        <div className='landing-container' ref={containerRef}>
            <motion.div 
                className='bg-image' 
                ref={bgImageRef}
                style={{opacity:bgImageOpacity, }}

            ></motion.div>
            <div className='landing-item'  ref={parentRef}>
                
                <motion.div
                    className='landing-item-text-container'
                    variants={variants}
                    initial="hidden"
                    animate={"visible"}
                    transition={{ duration: 0.6, delay:0.3}}
                    whileInView={{opacity:1, display:'flex'}}
                    ref={myRef}
                    style={{scale:scale, opacity:0}}
                >
                    <motion.div 
                        className='landing-item-text'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{ duration: 0.6, delay:0.6}} 
                    >
                        Mimou Feline Services
                    </motion.div>

                    <motion.div 
                        className='landing-item-subtext'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{ duration: 0.6, delay:0.9}} 
                    >
                        Committed to providing house cat services
                    </motion.div>

                    <div className='landing-logo-container'>
                        <img src={MimouLogoWhite} width={100} height ={100} alt="" />
                    </div>

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
            <Separator/>
        </div>
        )
}

export default Landing
