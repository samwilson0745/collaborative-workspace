import { Router, Request, Response } from "express";

const router = Router()

router.get(
    "/health",
    async(req:Request,res:Response)=>{
        res.send({message:"Health check endpoint working!!"})
    }
)

export { router as checkRouter }