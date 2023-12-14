import app from "./app.js";
import connectToDB from "./db/db.connect.js";
import dotenv from "dotenv";

dotenv.config();

// connectToDB();

const port = process.env.APP_PORT;
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
