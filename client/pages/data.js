import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Header from '../components/header'
import axios from 'axios'
import { Row, Col, Button, Popconfirm, message, List } from 'antd'


const Data = () => {

    const [dbdata, setDbdata] = useState([])

    useEffect(() => {
        axios
            // .get('https://jsonplaceholder.typicode.com/photos?_start=10&_limit=20')
            .get('http://localhost:3030/api/v1/projects')
            .then(res => {
                console.log(res.data)
                setDbdata(res.data)
                //console.log(dbdata)

            })
            .catch(err => console.log(err));

    }, [])




    const handleConfirm = (index) => {
        const newData = [...dbdata]
        newData.splice(index, 1)
        setDbdata(newData)
        message.success("Item is deleted")
    }

    const handleCancel = () => {
        message.error("Cancelled")
    }


    return (
        <div>
            <Head>
                <title>Barton-Outstanding Full Stack Developer</title>
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <Header />




            <div className="container">
                <ul>
                    {
                        dbdata.map((item, index) => {
                            return (
                                // <img src={eval(item.photo)} alt="loop photos" key={item.id}/>
                                
                                    <Row justify="center" align="center" key={item.id}>
                                        <Col xs={{ span: 18 }} md={{ span: 14, offset: 4 }} xl={{ span: 12, offset: 6 }}   >
                                        <li  >
                                            {item.description}
                                            </li>
                                        </Col>

                                        <Col xs={{ span: 6 }} md={{ span: 6 }} xl={{ span: 6 }} >
                                            <Popconfirm
                                                title="Are you sure you want to delete this task?"
                                                onConfirm={() => handleConfirm(index)}
                                                onCancel={handleCancel}
                                                okText="Yes"
                                                CancelText="No"
                                            >
                                                <Button danger >Delete</Button>
                                            </Popconfirm>
                                        </Col>
                                    </Row>




                               
                            )
                        })
                    }
                </ul>



                {/* <img src={require("../public/images/serene.png").default} /> 
                                      <img src="/images/serene.png" />
               */}
            </div>
            <style jsx>{`
            //    .container{                
            //        margin:  auto;
            //    }

            //    ul{
            //        margin: auto;
            //    }
            
            `} </style>

        </div>
    )
}

export default Data





