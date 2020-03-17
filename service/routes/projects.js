var Router =require('@koa/router')

router = new Router()


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
    }
   
]



router.get('/', async(ctx)=>{
    ctx.body=projects
})


router.get('/:id',async(ctx)=>{
    ctx.body=projects[ctx.params.id-1]
})   



router.post('/', async (ctx) => {
    project = {
        id: 4, title: "new Project", type: "commercial", link: "http://serene.tk",
        photo: "../public/images/serene.png", description: "A Web application based on Monash Industry project."
    }
    projects.push(project)

    ctx.body = projects
})


router.put('/:id',async(ctx)=>{
    project = {
        id: 2, title: "new Project2", type: "commercial", link: "http://serene.tk",
        photo: "../public/images/serene.png", description: "A Web application ."
    }
    ctx.body=projects.splice([ctx.params.id-1],1,project)
}) 

router.delete('/:id',async(ctx)=>{
    ctx.body=projects.splice([ctx.params.id-1],1)
}) 


module.exports = router