import React from 'react'
import '../public/style/components/header.css'
import {Row, Col, Menu} from 'antd'
import {HomeOutlined,HeartOutlined, BarChartOutlined  } from '@ant-design/icons'


const Header = ()=>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={12} md={10} lg={10} xl={10}>
                <span className="header-logo">Barton</span>
                <span className="header-text">Outstanding Full Stack Developer</span>
            </Col>
            <Col xs={0} sm={12} md={14} lg={8} xl={6}> 
                <Menu mode="horizontal">
                    <Menu.Item><HomeOutlined />Home</Menu.Item>
                    <Menu.Item><BarChartOutlined />Data</Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)


export default Header