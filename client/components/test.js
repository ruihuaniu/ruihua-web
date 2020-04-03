//import axios from "axios";
const axios = require('axios');

 async function test(){
     const res = await axios.get("http://localhost:3030/api/v1/projects")
         
     //console.log(res);
     
         
     
     const data = res.data;
     //console.log(data);
     
 }

 //test()