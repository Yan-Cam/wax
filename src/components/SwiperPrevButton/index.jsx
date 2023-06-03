import React from 'react'
import './index.css'
import { useSwiper } from 'swiper/react'
export default function SwiperPrevButton() {
    const swiper = useSwiper()
    return (
        <div onClick={() => swiper.slidePrev()} className='sp_btn'>{'<'}</div>
    )
}
