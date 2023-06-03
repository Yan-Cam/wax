import React, { Fragment } from 'react'
import './index.css'
export default function Title(props) {
    const { content } = props
    return (
        <Fragment>
            <div className='t_title'>
                <div className='title_t'>{content.title}</div>
                <div className='text_t'>{content.text}</div>
                <div className='line'></div>
            </div>
        </Fragment>
    )
}
