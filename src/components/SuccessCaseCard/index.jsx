import React, { Fragment } from 'react'
import './index.css'
export default function SuccessCaseCard(props) {
    const {content} = props
    return (
    <Fragment>
        <div className='suc_container'>
            <img alt='xx' className='suc_icon' src={'https://yan-cam.github.io/wax/'+content.iconSrc}/>
            <div className='suc_text'>
            {content.sucText}
            </div>
            <div className='suc_logo'>
                <img alt='xx' className='suc_logo_icon' src={content.logoSrc}/>
                <div className='suc_logo_text'>
                    <div className='suc_logo_name'>{content.logoName}</div>
                    <div className='suc_logo_desc'>{content.logoDesc}</div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
