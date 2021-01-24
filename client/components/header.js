import React from 'react'
import Link from 'next/link'
// import '../public/style/components/header.css'
import { Row, Col, Menu, Tooltip } from 'antd'
import { HomeOutlined, HeartOutlined, BarChartOutlined } from '@ant-design/icons'


const Header = () => (
    <div className="header">
        <Row >
            <Col xs={20} sm={12} md={12} lg={12} xl={12}>
                <span className="header-logo">Barton</span>
                <span className="header-text">Outstanding Front End Developer</span>
            </Col>
            <Col xs={4} sm={12} md={12} lg={12} xl={12}>
                <Menu mode="horizontal">
                    <Menu.Item style={{ lineHeight: "40px" }}><Link href="/"><a><HomeOutlined />Home</a></Link></Menu.Item>
                    <Menu.Item disabled style={{ lineHeight: "40px" }}><Link href="/data"><a><BarChartOutlined />Data</a></Link></Menu.Item>
                </Menu>
            </Col>
        </Row>

        <style jsx>{`
            .header{
                background-color:#ffffff;
                padding: 15px;
                /* overflow:hidden; */
                height:60px;
                border-bottom:2px solid #f0f0f0;
                text-align:center;
               
            }
            
            .header-logo{
                color: #1e90ff;
                font-size: 1.4rem;
                text-align: left;
            }
            
            .header-text{
                font-size:.8rem;
                color: #999999;
                display:inline-block;
                padding-left: 0.3rem;
            }

            .ant-menu-horizontal{
                text-align: center;
            }
        `} </style>
    </div>
)


export default Header