import React from 'react'
import {Button,Space,Input} from 'antd'
import logo from '../assets/logo.svg'
import { YoutubeOutlined,FacebookOutlined,InstagramOutlined,MailOutlined} from '@ant-design/icons'
const FooterComp = () => {
  return (
    
    <div className="footer">
        <div className="footer-info">
          <div className="nft-marketplace-info">
            <img className="logo-icon" alt="" src={logo} />
            <div className="additional-info">
             <div></div>
              <div className="community-info">
                <div className="join-our-community">Join our community</div>
                <div className="icons">
                <YoutubeOutlined style={{fontSize: "40px"}} onClick={()=>{}}/>
                <FacebookOutlined  style={{fontSize: "35px"}} onClick={()=>{}}/>
                <InstagramOutlined  style={{fontSize: "35px"}} onClick={()=>{}}/>
                <MailOutlined style={{fontSize: "35px"}} onClick={()=>{}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="explore">
            <b className="join-our-weekly">Explore</b>
            <div className="pages">
              <div className="marketplace1" onClick={()=>{}}>
                Marketplace
              </div>
              <div className="marketplace1" onClick={()=>{}}>
                Rankings
              </div>
              <div className="marketplace1" onClick={()=>{}}>
                Connect a wallet
              </div>
            </div>
          </div>
          <div className="subscribe">
            <b className="join-our-weekly">Join our weekly digest</b>
            <div className="pages">
              <div className="get-exclusive-promotions">{`Get exclusive promotions & updates straight to your inbox.`}</div>
                <Space.Compact >
                <Input className="subscribe-form" 
                placeholder="Enter your email"
                />
                <Button className="button6" ><div className="button">Subscribe</div></Button>
                </Space.Compact>
            </div>
          </div>
        </div>
        <div className="divider-parent">
          <div className="divider" />
          <div className="nft-market-use">
            Ⓒ NFT Market. Use this template freely.
          </div>
        </div>
      </div>
    
  )
}

export default FooterComp