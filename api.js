import express, {application} from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import router from './Routes/emails.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

dotenv.config();
const uri = process.env.URI;

mongoose.set('strictQuery', false);
mongoose.connect(uri, {useNewUrlParser:true}).then(console.log('Connection Successfull!'))
app.use('/emails', router)
app.get('/', (req, res)=>{
    res.send("GET Request Successfull...")
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });