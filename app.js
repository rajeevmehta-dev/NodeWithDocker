import express from 'express';
import router from './route.js';
const app = express();
app.use(router);
app.listen(3003,() => {
    console.log('Server is connected');
});