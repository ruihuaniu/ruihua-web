var Router = require('@koa/router')
var mysql = require('mysql')



let projects = [
  {
    "id": 1,
    "title": "Serene Project",
    "type": "commercial",
    "link": "http://serene.tk",
    "photo": "/images/serene.png",
    "description": "A Web application based on Monash Industry project."
  },
  {
    "id": 2,
    "title": "Timber Floor Centre Project",
    "type": "commercial ecommerce",
    "link": "https://www.timberfloorcentre.com.au",
    "photo": "/images/timber_floor_center.png",
    "description": "A Commercial project with various eCommerce features."
  },
  {
    "id": 3,
    "title": "Admin Management Tool",
    "type": "commercial personal",
    "link": "https://admin-management.now.sh",
    "photo": "/images/admin_management.png",
    "description": "A admin management tool with various features."
  },
  {
    "id": 4,
    "title": "TFC Commercial Project",
    "type": "commercial ecommerce",
    "link": "https://www.tfccommercial.com.au",
    "photo": "./images/tfc_commercial.png",
    "description": "A Commercial Web application project with basic e-commerce features."
  },
  {
    "id": 5,
    "title": "ruihua web Project",
    "type": "personal",
    "link": "https://ruihua.vercel.app/",
    "photo": "/images/barton_web.png",
    "description": "A project based on React and Node.js."
  }
]



router = new Router()



// RESTful API for Projects
router.get('/', async (ctx) => {
  ctx.body = projects
})


router.get('/:id', async (ctx) => {
  ctx.body = projects[ctx.params.id - 1]
})



router.post('/', async (ctx) => {
  project = {
    id: 4, title: "new Project", type: "commercial", link: "http://serene.tk",
    photo: "../public/images/serene.png", description: "A Web application based on Monash Industry project."
  }
  projects.push(project)
  ctx.body = projects
})


router.put('/:id', async (ctx) => {
  project = {
    id: 2, title: "new Project2", type: "commercial", link: "http://serene.tk",
    photo: "../public/images/serene.png", description: "A Web application ."
  }
  ctx.body = projects.splice([ctx.params.id - 1], 1, project)
})

router.delete('/:id', async (ctx) => {
  ctx.body = projects.splice([ctx.params.id - 1], 1)
})


module.exports = router