import React from 'react';
import { Row, Col } from 'antd'


const About = () => {

    return (
        <>

            <h1 style={{ textAlign: "center" }}>ABOUT ME</h1>
            <div className="about-container">
                <div className="about-container-inner">

                    <Row gutter={24}>
                        <Col xs={{ span: 24 }} md={{ span: 5 }} >
                            <div className="about-left">
                                <p className="about-left-upper">Good team player, problem solver</p>
                                <p className="about-left-lower">I'm Ruihua NIU</p>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 19 }} >
                            <div className="about-right">
                                <div className="about-right-upper">
                                    A software developer with several years’ industry experience, an exceptional eye for detail, a passion for creating performant products with delightful user experience, and a drive to further my career within the software engineering field. </div>
                                <hr />
                                <div className="about-right-middle">SKILLS</div>
                                <div className="about-right-lower">
                                    <Row gutter={24}>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }} >
                                            <ul>
                                                <li>HTML, CSS / SASS</li>
                                                <li>JavaScript / TypeScript  </li>
                                                <li>React / React Native, Redux </li>

                                            </ul>
                                        </Col>
                                        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                            <ul>
                                                <li>Node.js /Express, MongoDB  </li>
                                                <li>Webpack, Jest, Enzyme</li>
                                                <li>Git, CI/CD, Docker</li>

                                            </ul>
                                        </Col>
                                    </Row>



                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div >
            <style jsx>{`
                .about-container{

                    background: rgba(0,0,0,0.8) url("/images/barton_banner.jpg") ;
                    no-repeat fixed center;
                    background-size: cover;
                    background-blend-mode: darken;
                    padding:50px 15px;
                    min-height:500px;
                    color:#ffffff;
                    text-align:center;
                    
                }

                .about-container-inner{
                    max-width:1500px;
                    margin: 0 auto;
                }

                .about-left{
                    text-align:left;
                    text-transform:uppercase;
                    font-style:italic;
                    border: 1px solid #ffffff;
                    padding:20px 8px 10px;
                   
                }

                .about-left-upper{
                    font-size: 14px;
                }

                .about-left-lower{
                    font-size: 30px;
                    padding-top:25px;
                }

                .about-right{
                    color:#ffffff;
                    text-align:center;
                    // max-width:1000px;
                   
                }

                .about-right-upper{
                    font-size:16px;
                    padding:20px 10px;
                    text-align:justify;
                }

                .about-right-middle{
                    font-size:18px;
                    text-transform:uppercase;
                    text-align:center;
                    padding:15px;
                }

                .about-right-lower{
                    font-size:14px;
                    border: 3px dotted #ffffff;
                    padding:20px 10px 10px;
                    text-align:justify;
                }

                hr{
                    width:60%;

                }
            
            `} </style>

        </>
    )

}

export default About