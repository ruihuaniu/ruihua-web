import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Header from '../components/header'
import axios from 'axios'
import ImageTest from '../public/images/serene.png'

const Data = () => {

    const [dbdata, setDbdata] = useState([])

    const projects = [
        {
            id: 1, title: "Serene Project", type: "commercial", link: "http://serene.tk",
            photo: "../public/images/serene.png", description: "A Web application based on Monash Industry project."
        },
        {
            id: 2, title: "TFC Commercial Project", type: "commercial ecommerce", link: "https://www.tfccommercial.com.au",
            photo: "../public/images/tfc_commercial.png", description: "A Commercial Web application project with basic e-commerce features."
        },
        {
            id: 3, title: "Timber Floor Centre Project", type: "commercial ecommerce", link: "https://www.timberfloorcentre.com.au",
            photo: "../public/images/timber_floor_center.png", description: "A Commercial project with various eCommerce features."
        },
        // { id: 4, title: "Superior Carpet Care Project", type: "commercial ecommerce", link: "https://www.tfccommercial.com.au", photo: "https://www.bartonweb.site/wp-content/uploads/2019/05/tfc-commercial-web2.png", description: "A Commercial Web application." },
    ]

    useEffect(() => {
        axios
            // .get('https://jsonplaceholder.typicode.com/photos?_start=10&_limit=20')
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res.data)
                setDbdata(res.data)
                //console.log(dbdata)

            })
            .catch(err => console.log(err));

    }, [])

    const userIds = [1,2,3]

    return (
        <div>
            <Head>
                <title>Barton-Outstanding Full Stack Developer</title>
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <Header />
            <div>
                {
                   
                    
                //     dbdata.filter((item, index) => {
                //         return item.userId === 1
                     
                //      }).map((item)=>{
                //         return(
                //                     <div key={item.id}>
                //                     <img src={item.url} />
                //                     User ID is: {item.userId}, <br/>User title is: {item.title}
                //                 </div>
                //         )
                //      }),
                // // }) 

                projects.map((item)=>{

                    return(
                        <img src={item.photo} alt="loop photos" key={item.id}/>
                    )
                    
                })
                }

              
                {/* <img src={require("../public/images/serene.png").default} alt="serene screenshot" />
                <img src={ImageTest} alt="serene screenshot" />
                <img src="/images/serene.png" alt="serene screenshot" /> */}
            </div>
        </div>

    )
}

export default Data





