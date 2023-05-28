import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import https from 'https;

import imagesRouter from './routes/images.js';

import corsOptions from "./config/corsOptions.js";
import connectDB from './config/connectDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors(corsOptions));


(async () => {
  await connectDB(process.env.DATABASE_URI)

  app.get('/', (req, res) => {
    res.send('hiii')
  })

  app.use('/images', imagesRouter);

  app.all('*', (req, res) => {
    res.status(404).json({
      msg: '404 not found'
    })
  })

  app.listen(PORT, () => {
    console.log(`Server @ http://localhost:${PORT}`)
  })

   setInterval( 
      () => https.get('https://api-img-gallery.onrender.com'),  
      8 * 60 * 1000 
   )

})()

