import React from 'react'
import './index.css'
import { useSwiper } from 'swiper/react'
export default function SwiperNextButton() {
    const swiper = useSwiper()
    return (
        <div onClick={() => swiper.slideNext()} className='sn_btn'>{'>'}</div>
    )
}
