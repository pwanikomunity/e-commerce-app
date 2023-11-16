import express, { Router } from  'express'
const router =express.Router();
router.post('/',(req,res)=>{
    const {email,password} = req.body
})

export default router;