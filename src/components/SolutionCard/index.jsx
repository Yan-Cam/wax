import React, { Fragment } from 'react'
import './index.css'
export default function SolutionCard(props) {
    const { content } = props
    return (
        <Fragment>
            <div className='sol_card'>
                <div className='solc_title'>{content.title}</div>
                <div className='solc_text'>{content.text}</div>
                <img className='solc_img' src={content.src} alt="ss" />
                <div className='solc_more'>了解详情</div>
            </div>
        </Fragment>
    )
}
