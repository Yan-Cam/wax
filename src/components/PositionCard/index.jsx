import React, { Fragment, useState } from 'react'
import './index.css'
export default function PositionCard(props) {
    const [isClick, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!isClick)
    }
    const handleClickTd = () => {
        alert("简历投递邮箱：XXXXX@xxxxx.com")
    }
    const { content } = props
    return (
        <Fragment>
            <div style={{marginBottom:isClick?'470px':'0px'}} onClick={handleClick} className='pos_card_container'>
                <div className='pos_left'>
                    <div className='position'>{content.position}</div>
                    <div className='num'>{content.num}</div>
                </div>
                <div className='pos_right'>
                    <div className='salary'>{content.salary}</div>
                    <div className='publish_time'>{content.time} 发布</div>
                </div>
                <div style={{height:isClick?'470px':'0px'}}  className='pos_content'>
                    <div className='responsibility'>
                        {
                            content.respList.map((item, index) => {
                                return <div key={index} className='resp_item'>{item}</div>
                            })
                        }
                    </div>
                    <div className='qualification'>
                        {
                            content.qualList.map((item, index) => {
                                return <div key={index} className='qual_item'>{item}</div>
                            })
                        }
                        <div onClick={handleClickTd} className='td_btn'>立即投递</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
