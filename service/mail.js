var nodemailer = require('nodemailer')


//Email setting with nodemailer
var transporter = nodemailer.createTransport({
    //host:'smtp.126.com',
    service: 'SendinBlue',
    // port:465,
    // secure: false,
    auth:{
        user:'nrh36@126.com',
        pass:'v0kDxO8hTpILR1cX'
    }
})

var mailOptions={
    from: '"Node Mailer" <nrh666@126.com>',
    to: 'nrh36@126.com',
    subject: 'Contact Form',
    text: "Hello, NRH!!!"
}

transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log(err);
        
    }
    console.log("Message sent: " + info.response);
    
})
