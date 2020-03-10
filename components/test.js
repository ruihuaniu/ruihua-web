const userIds = [1,2,3]
dbdata= [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 4,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }]

 const result = userIds.forEach((user)=>{
     return(
        dbdata.filter((item, index) => {
            return item.id === user
        })
     )
 }
 )

 //const forEachResult = userIds.forEach((user, index, arr)=>  arr[index] =user+10)

 const forEachResult = userIds.map((user)=>  user+10)
//userIds

//  const filterResult = dbdata.filter((item, index) => {
//    for(let i = 0; i <=3; i++){
//       if(item.id === i){
//           return item
//         }
//      }
    
// })


const filterResult = dbdata.filter((item, index) => {
    for(let i = 0; i <=3; i++){
       if(item.userId === i){
           return item
       }
      }
     
 }).map((item, index)=> item.id ===1 )


 console.log("result is: ", result);
 console.log("ForEach result is: ", forEachResult);
 console.log("Filter result is: ", filterResult);
 