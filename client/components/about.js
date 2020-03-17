import React from 'react';
import {Row, Col} from 'antd'


const About =()=>{

    return(
        <>
         <h1 style={{textAlign:"center"}}>ABOUT ME</h1>
        <div className="about-container">
           
            <Row gutter={24}>
               <Col xs={{ span: 24 }} md={{ span: 5}} >
                   <div className="about-left">
                       <p className="about-left-upper">Masters graduate in information technology from Monash University</p>
                       <p className="about-left-lower">I'm Ruihua (Barton) NIU</p>
                    </div>
               </Col>
               <Col xs={{ span: 24 }} md={{ span: 19 }} >
                    <div className="about-right">
                        <div className="about-right-upper">A talented information technology professional with several years’ industry experience, an exceptional eye for detail and a drive to further my career within the Software Engineering field. I believe that my technical & soft skills, experience and my passion can help to make a difference with your business</div>
                        <hr/>
                        <div className="about-right-middle">SKILLS</div>
                        <div className="about-right-lower">
                            <Row gutter={24}>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} >
                                <ul>
                                    <li>HTML, CSS / SCSS, Ant Design</li>
                                    <li>JavaScript / React / Redux</li>
                                    <li>Node.js, PHP, Python</li>
                                    <li>MySQL, MongoDB</li>
                                </ul>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <ul>
                                    <li>AWS, Linux, Docker</li>
                                    <li>Git, Jest, Webpack</li>
                                    <li>WordPress CMS</li>
                                    <li>Adobe XD, Analytics</li>
                                </ul>
                            </Col>
                            </Row>
                           
                           

                        </div>
                    </div>
               </Col>
            </Row>


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
        </div>
        </>
    )

}

export default About