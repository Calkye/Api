const express = require('express')
const router = express.Router(); 
const mongodb = require('mongoose')



const Account = require('../Models/Account.cjs')

mongodb.connect('mongodb://localhost:27017/Accounts')

router.post('/Create-Account', async(req, res)=>{
  try{
    const username = req.body.Username; 
    const password = req.body.Password;  



    const NewAccount = await Account.create({
      Username: username, 
      Password: password
    })
    console.log(NewAccount) 
    res.status(200)
    res.redirect(307, '/Set-Cookie')

  }catch(error){
    res.status(500).json({msg: error.message})
  }
})

router.post('/Set-Cookie', async(req, res)=>{
  const { cookies } = req; 
  const sessionId = cookies.sessionId
  const username = req.body.Username; 
  const UpdatedAccount = await Account.findOneAndUpdate(
    {Username: username}, 
    {$set: {Cookie: sessionId}},
    {new: false}
  )
  res.status(200)
  res.send(UpdatedAccount)
  console.log(UpdatedAccount)
})







module.exports = router;