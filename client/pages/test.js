import { useEffect } from 'react'
import axios from 'axios'

import { resolveOnChange } from 'antd/lib/input/Input';

// {projects}

const Test = ({projects}) => {

    //method1: client side rendering. Normal in react

    // useEffect( () => {
    //     async function fetchData() {
    //         const res = await axios.get('http://localhost:3030/api/v1/projects')
    //         const projects = await res.data
    //         console.log(projects);
    //         console.log('under projects');
    //     }

    //     fetchData()

    // }, [])




    return (
        <div>
            {projects.map((item)=>(
                <div>{item.description}</div>
            ))}

            something

            {/* {console.log("projects in the body", projects)}; */}
            
        </div>
    )

}

//method1: Server side rendering, used in Next.js
export async function getStaticProps() {

    const res = await axios.get('http://localhost:3030/api/v1/projects')
    const projects = await res.data
    
   return {props:{projects,}} 
} 




export default Test

