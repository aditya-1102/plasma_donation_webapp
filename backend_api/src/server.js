import '@babel/polyfill';
const express = require('express');
const app = express();
const PORT=3000;
import {restRouter} from './api';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/plasmadb');        //CONNECTING TO THE DATABASE

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());
app.use('/api',restRouter); 

app.use((req,res,next)=>{
    const error=new Error("Not Found");
    error.status=404;
    error.message="Invalid route";
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    return res.json({
        error:{
            message:error.message
        }
    })
});
app.use((req,res,next) => {             //MIDDLEWARE MSG FOR EVERYTIME WE GO TO /api and /api/....
    console.log("Middleware is running before every API calls!!!");
    next();
})
app.get('/',(req,res)=>{        //DEFAULT ROUTE LOCALHOST:3000/
    res.json({
        msg:'API is running. GOT TO /api IN THE URL ABOVE!!!'
    })
})



          //ALL ROUTING STARTS AFTER /api IN THE URL





app.listen(PORT,()=>{               // DEFINING PORT MESSAGE AFTER COONECTION WITH THE PORT NUMBER 3000
    console.log(`Plasma API Server is Running at Port No: ${PORT}`)
})