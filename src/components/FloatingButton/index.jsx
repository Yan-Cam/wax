import React, { useState } from 'react'
import { Fragment } from 'react'
import './index.css'
import ModelAdvice from '../ModelAdvice'
export default function FloatingButton(props) {
    const { contents } = props
    const [showElem, setShowElem] = useState(false)
    let timer = null;//时间标识符
    const getShow = isShow => {
        setShowElem(isShow)
        console.log(isShow)
    }
    const handleWheel = function (e) {
        if (timer !== null) {
            e.preventDefault()
        }
    }
    const handleClick = tag => {
        return () => {
            if (tag === 'toTop') {
                // 设置定时器
                //禁止鼠标滑轮滚动，此处兼容性有问题，如果兼容更多低级版本需要写适配兼容代码
                document.addEventListener('wheel', handleWheel, { passive: false })
                timer = setInterval(function () {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop
                    //减小的速度
                    let isSpeed = Math.floor(-osTop / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed
                    //判断，然后清除定时器
                    if (osTop === 0) {
                        clearInterval(timer);
                        //移除鼠标滚轮滑动禁止
                        document.removeEventListener('wheel', handleWheel, { passive: false })
                    }
                }, 30);
            } else if(tag === 'showModel') {
                setShowElem(true)
            }

        }
    }
    return (
        <Fragment>
            <div className='fb_container'>
                {
                    contents.map((item, index) => {
                        return <div onClick={handleClick(item.tag)} key={index} className='fb_item'>
                            <img src={require('../../assets/' + item.src)} alt='ss' />
                            <div className='fb_item_content'>
                                {
                                    item.texts.map((item, index) => {
                                        return <div key={index} className='fb_item_text'>{item}</div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
            {showElem?(<ModelAdvice getShow={getShow}/>):''}
        </Fragment>
    )
}
