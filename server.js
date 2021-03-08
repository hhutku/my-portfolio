require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const nodemailer=require("nodemailer")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

async function main({name,email,message}) {


  let transporter = nodemailer.createTransport({
    service: "gmail",
 
    auth: {
      user:process.env.EMAIL, 
      pass: process.env.PASSWORD, 
    },
  });


  let info = await transporter.sendMail({
    from: email, 
    to: process.env.EMAIL, 
    subject: `message from ${name} ${email}`, 
    text: message, 
 
  });

  console.log("Message sent: %s", info.messageId);

}

app.post("/api/sendemail",(req,res)=>{
  main(req.body).catch(console.error);

})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});