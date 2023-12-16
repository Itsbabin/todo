import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors({
  origin : process.env.CORS_URL,
  credentials: true
}))

app.use(express.json({
  limit : "20kb"
}))

app.use(express.urlencoded({
  extended : true,
  limit : "20kb"
}))

import useUser from './utils/useUser.js'
import useData from './utils/useData.js'

app.use('/user',useUser);
app.use('/data',useData);




export default app;