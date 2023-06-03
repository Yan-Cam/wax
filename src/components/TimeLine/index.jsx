import React, { Fragment } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import swiperCore, { Autoplay } from 'swiper/core'
import { EffectCube } from 'swiper';
import SwiperPrevButton from '../../components/SwiperPrevButton'
import SwiperNextButton from '../../components/SwiperNextButton'
import './index.css'
import 'swiper/css'
import 'swiper/css/bundle'
export default function TimeLine(props) {
    swiperCore.use(Autoplay)
    const {contents} = props
    return (
        <Fragment>
            <Swiper
                modules={[Autoplay, EffectCube]}
                slidesPerView={1}
                speed={1500}
                effect='cube'
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false
                }}
                cubeEffect={{
                    slideShadows: false,
                    shadow: false,
                    shadowOffset: 100,
                    shadowScale: 0.6
                }}
                loop
                className='timeline_container'>
                {
                    contents.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className='tl_item'>
                                <div className='tl_year'>
                                    {item.year}
                                </div>
                                <div className='tl_container'>
                                    {
                                        item.list.map((item, index) => {
                                            return <div key={index} className='tlc_item'>
                                                {item}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
                <div className='swibtn_container'>
                    <SwiperPrevButton />
                    <SwiperNextButton />
                </div>

            </Swiper>
        </Fragment>
    )
}