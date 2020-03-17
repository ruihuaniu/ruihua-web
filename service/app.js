const Koa = require('koa')
const json = require('koa-json')
const Router = require('@koa/router')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const nodemailer = require('nodemailer')
const projectsAPI = require('./routes/projects.js')
const contactsAPI = require('./routes/contacts.js')

const app = new Koa()
const router = new Router()

app.use(json())
app.use(cors())
app.use(bodyParser())

app.use(async(ctx, next)=>{
    // ctx.body= new Date().getFullYear()
    // await next()
})

router.prefix('/api/v1')

// Invoke projects API located in routes folder
router.use('/projects', projectsAPI.routes())

// Invoke contacts API located in routes folder
router.use('/contacts', contactsAPI.routes() )



app.use(router.routes()).use(router.allowedMethods())

app.listen(3030, () => {
    console.log("Koa server is starting at port 3030");
})
