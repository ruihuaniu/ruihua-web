import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Header from '../components/header'
import axios from 'axios'


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

    const userIds = [1,2,3]


    const deleteHandle = (index)=>{
        // axios.delete("http://localhost:3030/api/v1/contacts" )
        // .then((res)=>{
        //     console.log(res);            
        // })
        // .catch((err)=>{
        //     console.log(err);
            
        // })
        const newData = [...dbdata]
        newData.splice(index,1)
        setDbdata(newData)
    }

    return (
        <div>
            <Head>
                <title>Barton-Outstanding Full Stack Developer</title>
                <link rel="icon" href="/images/icon.png" />
            </Head>
            <Header />
            <div>
                <ul>
                {                   
                dbdata.map((item,index)=>{
                    return(
                        // <img src={eval(item.photo)} alt="loop photos" key={item.id}/>
                        <li key={item.id}>                           

                                {item.description}
                                <span><button onClick={()=>deleteHandle(index)} >Delete</button></span>                             
                        </li> 
                                         
                    )                    
                })
                }


                </ul>
               
                    
                   {/* <img src={require("../public/images/serene.png").default} /> 
                   
                   <img src="/images/serene.png" />
               */}
            </div>

          
        </div>

    )
}

export default Data





