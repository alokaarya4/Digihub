const multer = require('multer');
const express = require('express');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const uploader = multer({ storage: storage });

//initializing nodemailer
const mialConfig = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    
}
}

const transporter = nodemailer.createTransport(mailConfig);

const genretateOTP = () => {

    const otp = Math.floor(Math.random() * 1000000);
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '30s' });
}
router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    res.json({ message: 'file uploaded successfully' });
});



module.exports = router;