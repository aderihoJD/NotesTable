import express from 'express';

const app = express();

const server = app.listen(8080, ()=>{
    console.log('Server is up and runnig on port 8080')
});