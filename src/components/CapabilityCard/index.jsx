import React, { Fragment } from 'react'
import './index.css'
export default function CapabilityCard(props) {
    const { content } = props
    return (
        <Fragment>
            <div className='cac_container'>
                <div className='cac_mark'></div>
                <div className='cac_icon'><img src={'https://yan-cam.github.io/wax/'+content.src} alt="ss" /></div>
                <div className='cac_title'>{content.title}</div>
                <div className='cac_content'>
                    {content.cacContent.map((item, index) => {
                        return <div key={index} className='cac_item'>{item}</div>
                    })}
                </div>
                <div className='cac_more'>
                    {content.moreContent.map((item, index) => {
                        return <div key={index} className='cac_more_item'>{item}</div>
                    })}
                </div>
                <div className='learn_more'>了解更多</div>
            </div>
        </Fragment>
    )
}
