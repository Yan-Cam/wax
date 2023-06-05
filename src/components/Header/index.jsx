import React, { Fragment, useEffect, useState } from 'react'
import './index.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
export default function Header() {
  const history = useHistory()
  const menu = [
    {
      text: '产品服务',
      path: '/sap_implementation'
    },
    {
      text: '解决方案',
      path: '/solution'
    },
    {
      text: '成功案例',
      path: '/cases'
    },
    {
      text: '关于惟昇',
      path: '/about'
    },
    {
      text: '招贤纳士',
      path: '/join'
    }
  ]
  //控制mark线
  const [left, setLeft] = useState('40px')
  const [width, setWidth] = useState('0px')
  const [height, setHeight] = useState('0px')

  //控制menubar
  const [color, setcolor] = useState('none')
  const [fontColor, setFontColor] = useState('#FFFFFF')
  const [shadow, setShadow] = useState('none')
  //下滑改变背景后不再触发鼠标移出事件，需要一个状态控制
  const [isScroll, setIsScroll] = useState(false)

  //处理页面滚动事件
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  const handleScroll = () => {
    if (document.documentElement.scrollTop === 0) {
      setFontColor('#FFFFFF')
      setcolor('none')
      setShadow('none')
      setIsScroll(false)
    } else {
      setFontColor('#373737')
      setcolor('#FFFFFF')
      setShadow('0 0 10px 3px rgb(0 0 0 / 5%)')
      setIsScroll(true)
    }
  }
  const handleHeaderOver = () => {
    setFontColor('#373737')
    setcolor('#FFFFFF')
    setShadow('0 0 10px 3px rgb(0 0 0 / 5%)')
  }
  const handleHeaderOut = () => {
    if (!isScroll) {
      setFontColor('#FFFFFF')
      setcolor('none')
      setShadow('none')
    }
  }
  const handleOver = Event => {
    let { key } = Event._targetInst
    key = parseInt(key)
    /* 计算mark线之偏移量 */
    let left = 40 * (key + 1) + 104 * key
    setWidth('64px')
    setHeight('2px')
    setLeft(left)
  }
  const handleOut = () => {
    setLeft('0px')
    //使动画更加平滑，如果想要更细致的动画在此多添加几个节点即可
    setWidth('52px')
    setWidth('32px')
    setWidth('22px')
    setWidth('0px')
  }
  const handleClick = e => {
    history.push(e.target.getAttribute('path'))
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  const handleClickLogo = ()=> {
    history.push('/home')
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  return (
    <Fragment>
      <div onMouseLeave={handleHeaderOut} onMouseEnter={handleHeaderOver} style={{ background: color, color: fontColor, boxShadow: shadow }} className='navigationBar'>
        <div onClick={handleClickLogo} className='logo'>WAX</div>
        <div className='topMenu'>
          <div style={{ left, width, height }} className='marker'></div>
          {
            menu.map((item, index) => {
              return <div onClick={handleClick} onMouseLeave={handleOut} onMouseEnter={handleOver} key={index} className='tmItem' path={item.path}>{item.text}</div>
            })
          }
        </div>
      </div>
    </Fragment>
  )
}
