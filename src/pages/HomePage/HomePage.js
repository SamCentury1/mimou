import React from 'react'
import "./HomePage.css"



// components
import Separator from './Components/Separator/Separator'

import Landing from './Components/Landing/Landing';
import Description from './Components/Description/Description';
import Mission from './Components/Mission/Mission';
import Values from './Components/Values/Values';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const HomePage = () => {




    // const control = useAnimation()
    // const [ref, inView] = useInView()




    // useEffect(() => {
    //     if (inView) {
    //       control.start("visible");
    //       console.log(inView)
    //     } else if (!inView) {
    //         control.start("hidden");
    //         console.log(inView)
    //       } 
    //   }, [control, inView]);
    // const {scrollYProgress} = useScroll({
    //     target: targetRef,
    //     offset: ["end end", "end start"]
    // })

    // const opacity = useTransform(scrollYProgress, [0, 0.5], [1,0])
    // const scale = useTransform(scrollYProgress, [0, 0.5], [1,0.8])

    return (
        <div>
            <div className='bg-image'></div>

                <Landing />
                <Separator/>
                <div className='component-container'>

                    <Description/>
                    <Separator/>

                    <div className='item-title'>Mission</div>
                    <Mission />
                    <Separator/>

                    <div className='item-title'>Core Values</div>
                    <Values />
                    <Separator/>

                    <div className='item-title'>Services</div>
                    <Services />
                    <Separator/>

                    <div className='item-title'>Testimonials</div>
                    <Testimonials />
                    <Separator/>

                    <div className='item-title'>Contact Us</div>
                    <Contact />
                    <Separator/>

                    <Footer />
                </div>
        </div>
    )
}

export default HomePage
