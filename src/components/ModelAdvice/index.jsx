import React from 'react'
import { Fragment } from 'react'
import './index.css'
export default function ModelAdivice() {
  return (
    <Fragment>
        <div className='model_container'>
            <div className='Advice'>
                <div className='adv_left'>
                    <div>用技术和创新</div>
                    <div>驱动企业数字化转型</div>
                    <img src="" alt="dd" />
                </div>
                <input placeholder='姓名' type="text" />
                <input placeholder='联系电话' type="text" />
                <input placeholder='邮箱' type="text" />
                <input placeholder='公司名称' type="text" />
                <input placeholder='公司所在地' type="text" />
                <input placeholder='所属行业' type="text" />
                <input placeholder='预算' type="text" />
                <input placeholder='您期望了解的信息' type="text" />
            </div>
        </div>
    </Fragment>
  )
}
