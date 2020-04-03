import React from 'react';
import { Row, Col } from 'antd'
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'


const Footer = () => {

    return (
        <div className="footer-container">
            <Row gutter={24}>
                <Col xs={{ span: 24 }} sm={{ span: 24}}>
                    <div className="footer-container-left">
                        {/* <h4>FOLLOW ME</h4> */}
                        <a href="https://www.linkedin.com/in/barton-niu" target="_blank"><LinkedinOutlined /></a>
                        <a href="https://github.com/BartonNIU/barton-web" target="_blank"><GithubOutlined /></a>
                        {/* <p>Languages & Libraries used: React, Node.js, <a href="https://github.com/BartonNIU/barton-web">more...</a></p> */}
                    </div>
                </Col>
                {/* <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                    <div className="footer-container-right">
                        <span>Languages & Libraries used: React, Node.js, <a href="https://github.com/BartonNIU/barton-web">more...</a></span>
                        {/* <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li><a href="https://github.com/BartonNIU/barton-web">more...</a></li>
                            
                        </ul>
                    </div>
                </Col> */} 

            </Row>
            <div className="footer-description">This site is developed with React and Node.js. <a href="https://github.com/BartonNIU/barton-web" target="_blank">Click here to see more details</a></div>
            <div className="footer-copyright">@Copyright 2020 Barton All Rights Reserved</div>


            <style jsx>{`

                .footer-container{
                    color:#ffffff;
                    background: rgba(0,0,0,.9) fixed;
                    padding:30px 15px;
                    min-height: 150px;
                    text-align:center;
                    // display:flex;
                    // justify-content:center;

                }

                .footer-container-left{
                    color:#ffffff;
                    font-size: 25px;
                    padding:30px;
                }

                .footer-container-left a{
                    padding:20px;
                    color:rgba(255,255,255,0.7);
                }

                .footer-container-left a:hover{
                  
                    color:rgba(255,255,255,1.0);
                }

                .footer-container-left p{
                    font-size: 14px;
                }

                .footer-container-right{
                    text-align:left;
                    color:rgba(255,255,255,0.7);
                    padding:35px;

                }

                .footer-container-right span{
                    // font-size: 16px;
                    // margin-bottom:15px;
                }

                .footer-container-right a{
                    color:rgba(255,255,255,0.7);
                    text-decoration:underline;
                }

                .footer-description{
                    font-size:14px;
                    color:#cccccc;
                    padding: 15px 0;
                }

                .footer-copyright{
                    font-size:14px;
                    color:#cccccc;
                }
            
            `} </style>

        </div>
    )
}


export default Footer