const multer = require('multer');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


const generatedOTP = {};


//initialize multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const uploader = multer({ storage: storage });


//initialize nodemailer

const mailconfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
    }
};

const transporter = nodemailer.createTransport(mailconfig);


const generateOTP = () => {

    const otp = Math.floor(Math.random() * 1000000);
    console.log(otp);

    return otp;
}



router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    res.json({ message: 'file uploaded successfully' });
})


router.post('/sendotp', (req, res) => {
    const otp = generateOTP();
    generatedOTP[req.body.email] = otp;
    transporter.sendMail({
        from: 'alok1235345@gmail.com',
        to: req.body.email,
        subject: 'OTP for password reset',
        html: `<p> OTP for password reset is <b> ${otp}</b> </p>`
    })

        .then((info) => {
            return res.status(201).json(
                {
                    msg: 'OTP sent successfully',
                    info: info.messageId,
                    preview: nodemailer.getTestMessageUrl(info)
                }
            )
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ msg: err });
        })

})


router.get('/verifyotp/:email/:otp', (req, res) => {
    const oldOTP = generatedOTP[req.params.email];
    if (oldOTP == req.params.otp) {
        return res.status(200).json({ msg: 'OTP verified successfully' });
    }
    else {
        return res.status(401).json({ msg: 'OTP verification failed' });
    }

}) 




module.exports = router;