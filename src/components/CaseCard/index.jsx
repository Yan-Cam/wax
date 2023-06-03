import React, { Fragment } from 'react'
import './index.css'
export default function CaseCard(props) {
    const {content} = props
    return (
    <Fragment>
        <div className='case_card_container'>
            <img src={content.src} alt="ss" />
            <div className='cc_name'>{content.name}</div>
        </div>
    </Fragment>
  )
}
