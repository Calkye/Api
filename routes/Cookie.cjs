const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');


const sessions = []


router.get('/Get-Cookie', async(req, res)=>{
  try{
    const cookie = uuidv4(); 
    sessions.push(cookie)
    res.cookie('sessionId', cookie) 
    res.status(200)
    res.send('Success')
    console.log('New Session: ', cookie)

  }catch(error){
    res.status(500).json({msg: error.message})
  }
})

router.post('/Validate-Cookie', (req, res)=>{
  try{
    const { cookies } = req; 
    const sessionId = cookies.sessionId ;
    if(sessions.includes(sessionId)){
      res.status(200).send({msg: 'successs'})
    }else { 
      res.status(403).send({msg: 'Invalid Cookie'})
    }

  }catch(error){
    res.status(500).json({msg: error.message})
  }
})



module.exports = router