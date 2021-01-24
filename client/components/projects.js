import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Card, Col, Row, Tabs } from 'antd'
import axios from 'axios';
import APIPATH from '../config/apiUrl'


const Projects = () => {

    const { Meta } = Card;
    const { TabPane } = Tabs;

    // use hardcoded data
    const projects = [
        {
            "id": 1,
            "title": "Serene Project",
            "type": "commercial",
            "link": "https://serene.tk/listing_act.php",
            "photo": "/images/serene.png",
            "description": "Find the appropriate activities, parks and amenities with powerful search functionalities."
        },
        {
            "id": 7,
            "title": "Online Chat APP",
            "type": "personal",
            "link": "https://nrhchat.tk/",
            "photo": "/images/nrh_chat0.png",
            "description": "Real time communication APP with multiple features powered by Websocket"
        },
        // {
        //     "id": 2,
        //     "title": "Timber Floor Centre Project",
        //     "type": "commercial ecommerce",
        //     "link": "https://www.timberfloorcentre.com.au",
        //     "photo": "/images/timber_floor_center.png",
        //     "description": "A Commercial project with various eCommerce features."
        // },
        {
            "id": 3,
            "title": "Admin Management Tool",
            "type": "commercial personal",
            "link": "https://admin-management.now.sh",
            "photo": "/images/admin_management.png",
            "description": "Admin Management Tool. Add, edit, update, delete, search and order all the items."
        },
        {
            "id": 4,
            "title": "TFC Commercial Project",
            "type": "commercial ecommerce",
            "link": "https://www.tfccommercial.com.au",
            "photo": "./images/tfc_commercial.png",
            "description": "A Commercial Web application project with basic e-commerce features."
        },
        {
            "id": 5,
            "title": "Barton web Project",
            "type": "personal",
            "link": "https://github.com/BartonNIU/barton-web",
            "photo": "/images/barton_web.png",
            "description": "A React / Next.js with Node.js project. RESTful APIs"
        },
        {
            "id": 6,
            "title": "Search what you want",
            "type": "personal",
            "link": "https://search-what-you-want.now.sh/",
            "photo": "/images/interesting_search.png",
            "description": "Fuzzy search with auto validation and lazy loading. Mobile App created with React Native is available"
        },

    ]

    // const shuffle = (arr) => {
    //     const arrLen = arr.length;
    //     for (let i = 0; i < arrLen - 1; i++) {
    //         let j = Math.floor(Math.random() * (arrLen - i) + i);
    //         [arr[i], arr[j]] = [arr[j], arr[i]]
    //     }

    //     return arr
    // }

    // const shuffleProjects = shuffle(projects)
    // console.log("shuffleProjects", shuffleProjects);


    // use API to get data
    // const [projects, setProjects] = useState([])

    // useEffect(()=>{
    //     axios.get(APIPATH.getProjects)
    //     .then((res)=>{
    //         console.log(res)
    //         setProjects(res.data) 

    //     })
    //     .catch((err)=>{
    //         console.log(err)

    //     })
    // },[])

    // console.log("projectgs is", projects);



    const checkProjects = (item) => {
        return (
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }} key={item.id} >
                <a href={item.link} target="_blank">
                    <Card hoverable style={{ maxWidth: 600, maxHeight: 500 }} cover={<img alt={item.title} src={item.photo} />} >
                        <Meta className="card-info" style={{ fontSize: 12.5 }} title={item.title} description={item.description} />
                    </Card>
                </a>
            </Col>
        )
    }


    return (

        <div className="project-container" id="projects-card">

            <h1>MY WORK</h1>
            <Tabs defaultActiveKey="all" centered>
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
                        max-width:1500px;
                        margin: 0 auto;
                                              
                    }

                    h1{
                        text-shadow: 10px 10px 10px #000000S;
                    }




                    .ant-tabs-nav-wrap{
                        // display:flex;
                        justify-content: center !important;
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