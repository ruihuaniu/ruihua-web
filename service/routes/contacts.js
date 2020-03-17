const Router = require('@koa/router')

const router = new Router()

const contacts = []

router.get('/', async(ctx)=>{
    ctx.body= contacts
})


// RESTful API for Contact form
router.post('/contacts', async (ctx) => {

    const contact = ctx.request.body  
    contacts.push(contact)
    ctx.body = contacts

    //Email setting with nodemailer
    const transporter =  nodemailer.createTransport({
        service: 'SendinBlue',
        auth: {
            user: 'nrh36@126.com',
            pass: 'v0kDxO8hTpILR1cX'
        }
    })

    const message = {
        from: `${contact.name} <${contact.email}>`,
        to: 'nrh36@126.com',
        subject: 'Contact Form',
        // text: contacts.length ? JSON.stringify(contacts[0]) : "Hello, no contact form found! NRH!!!",
        
        html: `
        <h2>Contact form</h2>
         <ul>
         <li>Name: ${contact.name}</li>
         <li>Email: ${contact.email}</li>
         <li>Message: ${contact.message}</li>
         <li>Source: ${contact.source}</li>
         </ul>       
        `
    }

     transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);

        }
        console.log("Message sent: " + info.response);

    })
})


module.exports = router 

