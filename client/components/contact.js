import React, { useState } from 'react';
import { Button, Form, Row, Col, Input, Select } from 'antd'
import { MailOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons'
import axios from 'axios'
import '../public/style/components/contact.css'
import APIPATH from '../config/apiUrl'
import { formatCountdown } from 'antd/lib/statistic/utils';

const Contact = () => {

    const { Option } = Select;
    const [form] = Form.useForm();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [source, setSource] = useState("linkedin")

    const layout = {
        labelCol: { span: 12, },
        wrapperCol: { span: 14, }
    }


    const validateMessages = {
        required: 'This field is required!',
        types: {
            email: 'Not a validate email!',
            number: 'Not a validate number!'
        }
    }

    const handleSubmit = () => {
        // axios.post(APIPATH.postContacts, 
        // {"name":name, "email":email, "message":message, "source": source} )
        // .then((res)=>{
        //     console.log(res);  
        //     form.resetFields()    
        // })
        // .catch((err)=>{
        //     console.log(err);

        // })

        form.resetFields()
    }

    return (
        <div className="contact-container">
            <h1 style={{ textAlign: "center" }}>CONTACT ME</h1>
            <div className="contact-container-card">
                <Row  >
                    <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                        <PushpinOutlined style={{ fontSize: '25px' }} />
                        <p>Address</p>
                        <p>Melbourne,Australia, 3000</p>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                        <PhoneOutlined style={{ fontSize: '25px' }} />
                        <p>Phone</p>
                        <a href="tel:0481 951 268">(+61) 481 951 268</a>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 8 }}>
                        <MailOutlined style={{ fontSize: '25px' }} />
                        <p>Email</p>
                        <a href="mailto:barton.niu@gmail.com">barton.niu@gmail.com</a>
                    </Col>
                </Row>
            </div>


            <Row >
                <Col sm={{ span: 24 }} md={{ span: 10 }}>
                    <div className="contact-container-left">
                        <img src="/images/barton_contact.jpg" />
                    </div>
                </Col>
                <Col sm={{ span: 24 }} md={{ span: 14 }}>
                    <div className="contact-container-right">
                        <p>Leave a message here,I will be with you shortly</p>
                        <hr />
                        <Form form={form} {...layout} layout={"vertical"} validateMessages={validateMessages} onFinish={handleSubmit}>
                            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Item>
                            <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true }, { type: 'email' }]}>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Item>
                            <Form.Item name={['user', 'message']} label="Message" rules={[{ required: true }]}>
                                <Input.TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
                            </Form.Item>
                            <Form.Item name={['user', 'source']} label="How did you hear about me" rules={[{ required: false }]}>
                                <Select defaultValue={source} onChange={(value) => setSource(value)}>
                                    <Option value="linkedin">LinkedIn</Option>
                                    <Option value="seek">Seek</Option>
                                    <Option value="indeed">Indeed</Option>
                                    <Option value="other">Others</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit"  >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>


            </Row>



            <style jsx>{`

                .contact-container{
                    padding:50px 15px;
                    max-width:1500px;
                    margin:0 auto;
                }
                .contact-container-card{
                    padding:30px 0;
                    text-align:center;
                }

                .contact-container-left{  
                    text-align:center;
                }

                .contact-container-left img{
                    max-width:90%;
                    max-height:500px;
                    object-fit:cover;
                    margin:15px auto;
                
                }

                .contact-container-right{
                     padding:30px 15px;
                    //  max-width:500px;
                    
                }

                .contact-container-right p{
                    font-style:italic;
                    font-size:15px;
                    font-weight:500;
                    text-align:justify;
                }

                .contact-container-right hr{
                    width: 10%;
                    margin: 20px 0;
                    text-align: left;
                    border-style:solid;
                    border-width:1px;
                    border-color: #cccccc
                    
                }

                // .ant-form-item{
                //     margin-bottom: 0 !important;
                // }
            
            `} </style>
        </div>
    )
}


export default Contact