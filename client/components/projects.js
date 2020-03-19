import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Card, Col, Row, Tabs } from 'antd'
import axios from 'axios';
import APIPATH from '../config/apiUrl'





const Projects = () => {

    const { Meta } = Card;
    const { TabPane } = Tabs;
    // let projects = []
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        axios.get(APIPATH.getProjects)
        .then((res)=>{
            console.log(res)
            setProjects(res.data) 
            
        })
        .catch((err)=>{
            console.log(err)
            
        })
    },[])
    

   

    const checkProjects = (item) => {
        return (
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }} key={item.id} >
                <a href={item.link} target="_blank">
                    <Card hoverable cover={<img alt={item.title} src={item.photo} />} >
                        <Meta className="card-info" style={{ fontSize: 12.5 }} title={item.title} description={item.description} />
                    </Card>
                </a>
            </Col>
        )
    }


    return (

        <div className="project-container" id="projects-card">

            <h1>MY WORK</h1>
            <Tabs defaultActiveKey="all">
                <TabPane tab="ALL" key="all">
                    <Row gutter={[24, 24]}>
                        {projects.map((item) => {
                            return (
                                checkProjects(item)
                            )
                        })}
                        <Col>


                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="COMMERCIAL" key="commercial">
                    <Row gutter={[24, 24]}>
                        {projects.map((item) => {
                            if (item.type.includes("commercial")) {
                                return (
                                    checkProjects(item)
                                )
                            }
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="ECOMMERCE" key="ecommerce">
                    <Row gutter={[24, 24]}>
                        {projects.map((item) => {
                            if (item.type.includes("ecommerce")) {
                                return (
                                    checkProjects(item)
                                )
                            }
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="PERSONAL" disabled key="personal">

                </TabPane>
            </Tabs>



            <style jsx>
                {`
                    .project-container{
                        background:#f5f5f5;
                        padding:50px 15px;
                        text-align:center;
                                              
                    }

                    h1{
                        text-shadow: 10px 10px 10px #000000S;
                    }

                    // .card-info{
                    //     font-family:  -apple-system,system-ui,BlinkMacSystemFont,"futura pt", Sniglet, "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; 
                    //     font-size: 12.5px;
                    //     line-height:1.2;
                    //     color:red ;
                    // }


                `}
            </style>
        </div>
    )
}


export default Projects