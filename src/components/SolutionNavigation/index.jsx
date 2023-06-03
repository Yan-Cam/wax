import React, { Fragment,useEffect } from 'react'
import './index.css'
export default function SoultionNavigation(props) {
    const { content, getClassify } = props
    useEffect(()=>{
        //初始设置选中全部
        const all = document.querySelectorAll('.sol_item')
        all[0].classList.add('active')
    },[])
    const handleClick = e => {
        const all = document.querySelectorAll('.sol_item')
        all.forEach((item)=>{
            item.classList.remove('active')
        })
        e.target.className = 'sol_item sol_hover active'
        getClassify(e.target.innerHTML)
    }
    return (
        <Fragment>
            <div className='sol_navigation'>
                <div className='sol_title'>{content.title}</div>
                <div className='sol_item_container'>
                    {
                        content.list.map((item, index) => {
                            return <div onClick={handleClick} key={index} className='sol_item sol_hover'>{item}</div>
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
