const express = require('express');

const app = express();
const port = 5000;

const cors = require('cors');

const UserRouter = require('./routers/userRouter');
const UtilRouter = require('./routers/util');

app.use(cors({
    origin : ['http://localhost:5173'] 
}));
app.use(express.json());

app.use('/user', UserRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

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