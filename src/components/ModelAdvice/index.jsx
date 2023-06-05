import React, { useRef, useState } from 'react'
import { Fragment } from 'react'
import './index.css'
import { useEffect } from 'react'
import axios from 'axios'
export default function ModelAdivice(props) {
  const [visibility, setVisibility] = useState('visible')
  const { getShow } = props
  const username = useRef('')
  const phone = useRef('')
  const email = useRef('')
  const company = useRef('')
  const address = useRef('')
  const industry = useRef('')
  const budget = useRef('')
  const message = useRef('')
  useEffect(() => {
    document.documentElement.addEventListener('wheel', handleWheel, { passive: false })
  })
  const handleClickClose = () => {
    setVisibility('hidden')
    getShow(false)//同步父子组件状态，因为在子组件里也可以取消模态框
    document.documentElement.removeEventListener('wheel', handleWheel, { passive: false })
  }
  const handleWheel = function (e) {
    e.preventDefault()
  }
  const handleSubClick = () => {
    if (username.current.value !== "" && phone.current.value !== "" && company.current.value !== "" && address.current.value !== "" && industry.current.value !== "") {
      const content = `联系人姓名：${username.current.value}联系电话：${phone.current.value}公司名称：${company.current.value}所在行业：${industry.current.value}公司所在地：${address.current.value}预算：${budget.current.value}邮箱：${email.current.value}咨询信息：${message.current.value}`

      axios.post("http://www.pushplus.plus/send", {
        "token": "97551d80d7d24e9f99d928154e90184c",
        "title": "标题",
        "content": content,
        "topic": "00155",
        "template": "json"
      }).then((response) => {
        if (response.data.code !== 200) {
          alert('异常：' + response.data.msg)
          setVisibility('hidden')
          getShow(false)//同步父子组件状态，因为在子组件里也可以取消模态框
        } else {
          alert('提交成功！')
        }
      }).catch((err) => {
        alert('提交错误，请检查网络环境或直接电话联系' + err)
        setVisibility('hidden')
        getShow(false)//同步父子组件状态，因为在子组件里也可以取消模态框
      })


    } else {
      alert("有必填项为空，请填写完整后再提交。")
    }
  }
  return (
    <Fragment>
      <div style={{ visibility }} className='model_container'>
        <div className='advice'>
          <div className='adv_left'>
            <div className='adv_left_text'>
              <div>用技术和创新</div>
              <div>驱动企业数字化转型</div>
            </div>
            <img src="https://yan-cam.github.io/wax/call.png" alt="dd" />
          </div>
          <div className='adv_form'>
            <div className='adv_form_title'>
              <div>留言咨询</div>
              <img onClick={handleClickClose} src={require('../../assets/close.png')} alt="" />
            </div>
            <div className='adv_form_row1'>
              <div className='adv_form_row1_item'>
                <input ref={username} placeholder='姓名(必填项)' type="text" required />
              </div>
              <div className='adv_form_row1_item'>
                <input ref={phone} placeholder='联系电话(必填项)' type="text" />
              </div>
            </div>
            <div className='adv_form_row1'>
              <div className='adv_form_row1_item'>
                <input ref={email} placeholder='邮箱' type="text" />
              </div>
              <div className='adv_form_row1_item'>
                <input ref={company} placeholder='公司名称(必填项)' type="text" />
              </div>
            </div>
            <div className='adv_form_row2'>
              <div className='adv_form_row2_item'>
                <input ref={address} placeholder='公司所在地(必填项)' type="text" />
              </div>
            </div>
            <div className='adv_form_row1'>
              <div className='adv_form_row1_item'>
                <input ref={industry} placeholder='所属行业(必填项)' type="text" />
              </div>
              <div className='adv_form_row1_item'>
                <input ref={budget} placeholder='预算(单位￥人民币)' type="text" />
              </div>
            </div>
            <div className='adv_form_row2'>
              <div className='adv_form_row2_item'>
                <textarea ref={message} className='area' placeholder='你期望了解的信息' type="text" />
              </div>
            </div>
            <div className='adv_form_row3'>
              <input className='checkbox' type="checkbox" name="" id="" />
              <span>我确认我已阅读并理解网站的隐私政策</span>
            </div>
            <div onClick={handleSubClick} className='btn_sub'>确认提交</div>
          </div>
        </div>
      </div>

    </Fragment >
  )
}
