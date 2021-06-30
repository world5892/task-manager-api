const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'world5892@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'world5892@gmail.com',
        subject: 'It was good to have you on board',
        text: `Thanks for your cooperation, ${name}. If there's anything we can improve in our service, please let us know`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}