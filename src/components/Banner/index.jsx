import React, { Fragment, useState } from 'react'
import './index.css'
export default function Banner(props) {
  const { content } = props
  const [height, setHeight] = useState('0px')
  const [lineHeight, setLineHeight] = useState('0px')
  const [opacity, setOpacity] = useState('0')
  const handleImgLoaded = e => {
    setHeight(`${e.target.offsetHeight}px`)
    setLineHeight(`${e.target.offsetHeight}px`)
    setOpacity('1')
  }
  const maxWidth = document.documentElement.clientWidth
  return (
    <Fragment>
      <div className='banner'>
        <img onLoad={handleImgLoaded} className='banner_img' style={{ animation: content.isAnima ? 'bannerscale 8s ease both' : '',width:maxWidth }} src={content.src} alt="banner" />
      </div>
      <div style={{height,lineHeight,opacity}} className='banner_text'>{content.text}</div>
    </Fragment>
  )
}
