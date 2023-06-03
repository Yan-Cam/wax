import React, { Fragment } from 'react'
import './index.css'
export default function ValuesCard(props) {
    const {content} = props
    return (
    <Fragment>
        <div className='vc_card_container'>
            <div className='vc_card_img'>
                <img src={content.src} alt="" />
            </div>
            <div className='vc_card_title'>{content.title}</div>
            <div className='vc_card_text'>{content.text}</div>
        </div>
    </Fragment>
  )
}
