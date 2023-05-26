import dotenv from "dotenv";
import express from "express";
import cors from 'cors';

import corsOptions from "./config/corsOptions.js";
import connectDB from './config/connectDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2000;


app.use(cors(corsOptions));


(async () => {
  await connectDB(process.env.DATABASE_URI)

  app.get('/', (req, res) => {
    res.send('hiii')
  })

  app.listen(PORT, () => {
    console.log(`Server @ http://localhost:${PORT}`)
  })

})()

