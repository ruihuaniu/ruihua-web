import React from 'react'
import {Carousel, Row, Button} from 'antd'


const Banner =()=>(
    < >
         
       <Carousel effect="fade" className="banner-container" >
       {/* <Row type="flex" justify="center"> */}
            <div className="banner-button-slide-1">
            <a href="#projects-card" className="banner-button">Find out my work</a>
                
            </div>
            <div className="banner-button-slide-2">
            <a className="banner-button">Enjoy the data</a>
           
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
                    // object-fit: contain;
                }

                div.banner-button-slide-1{
                    padding-top:300px;
                    background: url("https://www.bartonweb.site/wp-content/uploads/2019/07/domenico-loia-hGV2TfOh0ns-unsplash.jpg") no-repeat fixed  bottom;
                    background-size:cover;
                }

                div.banner-button-slide-2{
                    padding-top:300px;
                    background: url("https://www.bartonweb.site/wp-content/uploads/2020/03/data-sea.jpg") no-repeat scroll center;
                    background-size:cover;
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
                    padding:10px 18px;     
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