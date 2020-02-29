import React from 'react'
import {Carousel, Row, Button} from 'antd'


const Banner =()=>(
    < >
         
       <Carousel effect="fade" className="banner-container" >
       {/* <Row type="flex" justify="center"> */}
            <div className="banner-button-slide-1">
            <button className="banner-button">Find out my work</button>
                
            </div>
            <div className="banner-button-slide-2">
            <button className="banner-button">Enjoy the data</button>
           
            </div>
         
            {/* </Row> */}
           </Carousel> 
           
           <style jsx>{`
                div{
                    width:100%;
                    height:400px;
                    text-align:center;
                   
                    
                }
                div img{
                    object-fit: contain;
                }

                div.banner-button-slide-1{
                    padding-top:300px;
                    background-image: url("https://www.istockphoto.com/resources/images/HomePage/Hero/985553596.jpg")
                }

                div.banner-button-slide-2{
                    padding-top:300px;
                    background-image: url("https://www.istockphoto.com/resources/images/HomePage/Hero/530842059.jpg")
                }

                // .banner-container{
                //     display: flex;
                //     justify-content: center;
                //     align-items:center;
                //     background: #1e90ff;;                                  
                // }

                .banner-button{
                    font-size:1rem;
                    color:#ffffff ;
                    text-transform: uppercase;
                    background: rgba(0, 0, 0, 0.60);
                    box-shadow: 5px 5px 5px #888888;
                    border: none; 
                    padding:6px 15px;     
                }

                .banner-button:hover{
                    cursor:pointer;
                    background: rgba(0, 0, 0, 0.80);
                }

           `}

           </style>
    </>
)


export default Banner