import mongoose, {Schema} from "mongoose";
import express from "express"
const router = express.Router();

const emailSchema = mongoose.Schema({
    name:String,
    emailID:String,
    message:String
})

const emailObj = mongoose.model('email', emailSchema)

router.post('/', (req, res)=>{
    const post = new emailObj({ //Creating instance of the email sent to our router through post request
        name: req.body.name, //Storing the request body information in out model
        emailID:req.body.emailID,
        message:req.body.message
    })
    post.save() //Saving the new post from the request to the database.
    .then((data)=>{
        res.json(data)
    }).catch(err=>console.log("ERROR"))

})

router.get('/',async (req,res)=>{
    const emails =await emailObj.find()
    res.json(emails)
    console.log(emails)
})
export default router