const express = require('express');

const app = express();
const port = 5000;

const cors = require('cors');

const userRouter = require('./routers/userRouter');
const studentRouter = require('./routers/studentRouter');
const badgeRouter = require('./routers/badgeRouter');
const utilRouter = require('./routers/util');
const issueRouter = require('./routers/issueRouter');


app.use(cors({
    origin : ['http://localhost:5173'] 
}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/student', studentRouter);
app.use('/badge', badgeRouter);
app.use('/issue', issueRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    res.send('response from express server');
});

app.get('/home', (req, res) => {
    res.send('response from home')
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

app.listen(port,  () => {
    console.log('express server started successfully');
});