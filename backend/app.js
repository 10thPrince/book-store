import express, { request, response } from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js'



const app = express();

app.use(express.json());
 
app.get('/', (request, response)=>{
    console.log(request);
    return response.status(200).send('Welcome to mern');
})

app.use('/books', bookRoute)


mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');

    app.listen(PORT, ()=>{
    console.log(`Server has Started on ${PORT}` );
    
    })   
})
.catch((error)=>{
    console.log(error);
    
})