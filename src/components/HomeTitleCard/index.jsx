import React, { Fragment } from 'react'
import './index.css'
export default function HomeTitleCard(props) {
    const { content } = props
    return (
        <Fragment>
            <div className='htcard_container'>
                <div className='htcard_img'>
                    <img
                        src={require('../../assets/'+content.src)}
                        alt='图标'
                    />
                </div>
                <span className='htcard_title'>{content.title}</span>
                <span className='htcard_text'>
                    {content.text}
                </span>
            </div>
        </Fragment>
    )
}
