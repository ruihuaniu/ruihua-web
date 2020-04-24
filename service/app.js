const Koa = require('koa')
const json = require('koa-json')
const Router = require('@koa/router')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const send = require('koa-send')
const projectsAPI = require('./routes/client/projects.js')
const contactsAPI = require('./routes/client/contacts.js')

const app = new Koa()
const router = new Router()

app.use(json())
app.use(cors())
app.use(bodyParser())
//app.use(serve(__dirname + '../client/out/index.html'))

// app.use(async (ctx, next) => {
//     // ctx.body = new Date().getFullYear()
//     // await next()
//     ctx.body = '../client/build/index.html';
// })

const root = require('path').join(__dirname, '../client', 'out');
app.use(serve(root));
app.use(async function (ctx, next) {
    return await send(ctx, 'index.html', {
        root
    })
})




router.prefix('/api/v1')

// Invoke projects API located in routes folder
router.use('/projects', projectsAPI.routes())

// Invoke contacts API located in routes folder
router.use('/contacts', contactsAPI.routes())



app.use(router.routes()).use(router.allowedMethods())

app.listen(3030, () => {
    console.log("Koa server is starting at port 3030");
})
