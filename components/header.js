import React from 'react'
import Link from 'next/link'
import '../public/style/components/header.css'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, HeartOutlined, BarChartOutlined } from '@ant-design/icons'


const Header = () => (
    <div className="header">
        <Row >
            <Col xs={20} sm={12} md={12} lg={12} xl={12}>
                <span className="header-logo">Barton</span>
                <span className="header-text">Outstanding Full Stack Developer</span>
            </Col>
            <Col xs={4} sm={12} md={12} lg={12} xl={12}>
                <Menu mode="horizontal">
                    <Menu.Item><Link href="/"><a><HomeOutlined />Home</a></Link></Menu.Item>
                    <Menu.Item disabled><Link href="/data"><a><BarChartOutlined/>Data</a></Link></Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)


export default Header