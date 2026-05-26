

const transporter = require("../config/mail");


const sendmail = async({to , subject , html})=>{
    await transporter.sendMail({
        from:process.env.SMTP_FROM,
        to,
        subject,
        html,
    });
}

module.exports = sendmail;