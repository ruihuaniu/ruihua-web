import React from 'react'
import {Carousel} from 'antd'


const Banner =()=>(
    <div>
       <Carousel effect="fade"  className="banner-container">
           <div >
               <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/985553596.jpg"/>
               
           </div>
           <div>
           <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/530842059.jpg"/>
           </div>
           </Carousel> 
           <style jsx>{`
                div {
                    width:100%;
                    height:400px;
                }
                div img{
                    object-fit: contain;
                }
                // .banner-container{
                //     height:300px;
                // }
           `}

           </style>
    </div>
)


export default Banner