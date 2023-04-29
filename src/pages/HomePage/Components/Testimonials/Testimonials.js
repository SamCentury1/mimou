import React from 'react'

import './Testimonials.css'
import Separator from '../Separator/Separator'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import * as TiIcons from 'react-icons/ti'


const testimonialsArray = [
    {key:1, name: 'Chloe W.', title: 'President & CEO at Hospital', textBody: "Mimou was a great employee. He was with us for three years and I never felt safer.", rating: 5},
    {key:2, name: 'Matthew Milton', title: 'Founder of Twitter',  textBody: "Saved my life. He can tell when you've just about had it and he'll convince you to get down the stool", rating: 4.5},
    {key:3, name: 'Rachel Greenwood', title: 'Server at Bishop & Bagg',    textBody: "Got rid of a big spider. Ate that fucker right infront of my face. Was that a power move or a common practice? Either way, I sleep better now", rating: 5},
    {key:4, name: 'Deborah Finkelstein', title: 'Owner of 5 Cats', textBody: "Professional and attentive to detail. Mimou is the embodiment of feline excellence", rating: 5},
    {key:5, name: 'Rob Grimm', title: 'CEO of RGG Photo',   textBody: "Mimou is not only excellent at his craft - he's a prodigee at cat modelling.", rating: 5},
]
const Testimonials = () => {


    const StarRating = (rating) => {

        let ratingArray = []
        for (let i = 0; i < Math.floor(rating); i ++) {
            ratingArray.push('1')
        }

        if (rating - Math.floor(rating) === 0.5) {
            ratingArray.push('0.5')
        }

        return (
            <div className='star-rating'>
                {
                    ratingArray.map((obj,key) => {
                        if (obj === '1') {
                            return (
                                <TiIcons.TiStar key={key} />
                            )
                        } else if (obj === '0.5') {
                            return (
                                <TiIcons.TiStarHalf key={key} />
                            )
                        }
                    })

                }
            </div>
        )
    }

    return (
        <div className='testimonials-container'>
            <div className='item-title'>Testimonials</div>
            <div className='testimonials-item'>
                <Swiper
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1}
                    coverflowEffect={
                        {
                            rotate:0,
                            stretch:0,
                            depth:300,
                            modifier:2.5,
                        }
                    }
                    pagination={{el:'.swiper-pagination', clickable:true}}
                    navigation={{
                        nextEl:'swiper-button-next',
                        prevEl:'swiper-button-prev',
                        clickable:true
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container'
                    // spaceBetween={50}
                    // slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}                
                >

                    {
                        testimonialsArray.map((obj, key) => {
                            return (
                                <SwiperSlide key={key} className='testimonials-card'>
                                    <div className='testimonial-card-body'>
                                        <div className='testimonial-picture'></div>
                                        {/* <StarRating rating={obj.rating}/> */}
                                        <div className='testimonial-rating'>{StarRating(obj.rating)}</div>
                                        <div className='testimonial-text'>"{obj.textBody}"</div>
                                        <div className='testimonial-name-container'>
                                            <div className='testimonial-name'>{obj.name}</div>
                                            <div className='testimonial-title'>{obj.title}</div>
                                        </div>
                                    </div>    
                                </SwiperSlide>
                            )
                        })
                    }

                    <div className='slider-controler'>
                        {/* <div className='swiper-button-prev'>
                            <GrIcons.GrFormPrevious/>
                        </div> */}

                        {/* <div className='swiper-button-next'>
                            <GrIcons.GrFormNext/>
                        </div> */}
                        <div className='swiper-pagination'></div>
                    </div>
                </Swiper>
            </div>
            <Separator/>
        </div>
    )
}

export default Testimonials