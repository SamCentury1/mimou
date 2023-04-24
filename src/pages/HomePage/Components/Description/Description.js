import React from 'react'
import {motion} from 'framer-motion'
import './Description.css'

function Description() {
    return (
        <div className='description-item'>
            <motion.div 
                className='description-item-text-container'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.6, delay:0.3}} 
                style={{}}                      
            >
                <div className='description-item-text-header'>SECURITY EXCELLENCE ACCROSS ALL DOMAINS</div>
                <div className='description-item-text-body'>
                    Mimou Security Services is Canada's fastest growing 
                    professional feline security services firm. 
                    Servicing a diverse range of professional services, spanning
                    accross local and international markets. 
                    No matter the size, location, and scope of the job,
                    Mimou is committed to meeting and exceeding your security challenges.
                </div>
            </motion.div>
        </div>
    )
}

export default Description