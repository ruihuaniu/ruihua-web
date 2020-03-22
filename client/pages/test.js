
import axios from 'axios'
import fetch from 'node-fetch'
import { resolveOnChange } from 'antd/lib/input/Input';

// {projects}

const Test =({projects})=>{


//    const res=  axios.get('http://localhost:3030/api/v1/projects')

//    const projects = await res.then((res)=>res.data);
   console.log(projects);
   console.log('under projects');
   
   
    
   
    return(
        <div>
            {/* {projects.map((item)=>(
                <div>{item.description}</div>
            ))} */}

            something
        </div>
    )

}

// export async function getStaticProps() {

//     const projects = new Promise((resolve)=>{
//         axios.get('http://localhost:3030/api/v1/projects')
//     .then((res)=>{
//         console.log(res.data);
//         resolve(res.data)
        
//     })

// })
    
 
//    return {props:{projects,}} 
// }



export default Test