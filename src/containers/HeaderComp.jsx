import React from 'react'
import { Button } from 'antd';
import { UserOutlined} from '@ant-design/icons'
import logo from '../assets/logo.svg'
const HeaderComp = () => {
  return (
   
    <div className="navigation">
        <div className="nav-logo" onClick={()=>{}}>
          <img className="logo-icon" alt="" src={logo} />
        </div>
        <div className="nav-nav-menu">
          <div className="marketplace" onClick={()=>{}}>

            <div className="button">About</div>
          </div>
          <div className="marketplace" onClick={()=>{}}>

            <div className="button">Help</div>
          </div>
          <div className="marketplace" onClick={()=>{}}>
            <div className="button">Contact</div>
          </div>
          <div className="button">
            <Button className="sign-up" icon={<UserOutlined />}>
              Login
            </Button>
          </div>
        </div>
      </div>
   
  )
}

export default HeaderComp