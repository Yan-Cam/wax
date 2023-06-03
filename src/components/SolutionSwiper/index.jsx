import React, { Fragment } from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import swiperCore, { EffectCoverflow, Autoplay } from 'swiper/core'
import 'swiper/css'
import 'swiper/css/bundle'
export default function SolutionSwiper(props) {
    const { contents } = props
    console.log(contents)
    swiperCore.use([Autoplay])
    return (
        <Fragment>
            <Swiper
                className='sw_container'
                modules={[EffectCoverflow, Autoplay]}
                spaceBetween={3}
                slidesPerView={3}
                loop
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    stopOnLastSlide: false
                }}
                effect='coverflow'
                speed={1000}
                slideToClickedSlide
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: false,
                    scale: 1,
                    depth: 150,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    contents.map((item, index) => {
                        return <SwiperSlide key={index}> <div className='sw_item'>
                            <div className='sw_left'>
                                <div className='title'>
                                    <img src={item.iconSrc} alt="ss" />
                                    <div className='title_text'>
                                        {item.title}
                                    </div>
                                </div>
                                <div className='title_container'>
                                    {item.text}
                                </div>

                                <button className='title_btn'>查看详情</button>
                            </div>
                            <div className='sw_right'>
                                <img src={item.imgSrc} alt="ss" />
                            </div>
                        </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </Fragment>
    )
}
