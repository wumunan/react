import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <ul>
      <NavLink to = '/home'><span className="iconfont icon-shouye"></span>首页</NavLink>
      <NavLink to = '/kind'><span className="iconfont icon-leimupinleifenleileibie"></span>分类</NavLink>
      <NavLink to = '/cart'><span className="iconfont icon-tubiaozhizuomoban" style={{ fontSize:"18px"}}></span>购物车</NavLink>
      <NavLink to = '/msg'><span className="iconfont icon-xinfeng"></span>消息</NavLink>
      <NavLink to = '/user'><span className="iconfont icon-wo"></span>我</NavLink>
    </ul>
  </footer>
)

export default Footer
