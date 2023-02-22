// https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m

require("dotenv").config({path:"~/sakura-eng.net/frontend/.env"});
// require('dotenv').config({ path: '/custom/path/to/.env' })  https://www.npmjs.com/package/dotenv


const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
// require("dotenv").config();
// // require('dotenv').config({ path: '/custom/path/to/.env' })  https://www.npmjs.com/package/dotenv

const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());


let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    // メールアドレス
    user: process.env.REACT_APP_EMAIL_ADDRESS,
    // 16桁のアプリパスワード
    // !!サーバーの環境関数に保存すべきでしょう!!
    pass: process.env.REACT_APP_APP_PASS,
  }
});


transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/api", function (req, res) {

  res.header('Access-Control-Allow-Origin', '*');
  let mailOptions = {
    from: `${req.body.mailerState.email}`,

    to: process.env.REACT_APP_EMAIL_ADDRESS,

    
    subject: `${req.body.mailerState.name}様からのお問い合わせ（ホームページより）`,
    text: `
    ホームページから以下のお問い合わせがありました。

    お名前・会社名： ${req.body.mailerState.name}
    メールアドレス： ${req.body.mailerState.email}
    お電話番号： ${req.body.mailerState.tel} 

    何について： 「${req.body.mailerState.service} 」
    したいこと：「${req.body.mailerState.type}」
    詳細メッセージ： ---------------
    ${req.body.mailerState.message}
    ------------------------------
    `,
  };


  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
})

const port = 10000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});