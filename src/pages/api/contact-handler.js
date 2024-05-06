require('dotenv').config();
import nodeMailer from "nodemailer"

export default function contactHandler(req, res){
    if (req.method === "POST") {
        const { email, name, message } = req.body

        const transporter = nodeMailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        const mailOptions = {
            from: "My website",
            to: "receive-email@gmail.com",
            subject: "Next.jsコンタクトページ",
            text: `名前: ${name} \n\nメールアドレス: ${email} \n\nメッセージ: ${message}`
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return res.json({message: "失敗しました"})
            }else{
                return res.json({message: "成功しました"})
            }
        })
    }
}