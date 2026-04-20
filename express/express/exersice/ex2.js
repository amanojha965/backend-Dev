import fs from "fs";
import logger from "../logger/log.js";
import {StatusCodes} from "http-status-codes";

function responceTime(req,res,next){
    const startTime=new Date();
    try{
        res.on("finish",()=>{
            const endTime=new Date();
            const responceTime=endTime-startTime;
            logger("Time",`responce time:${responceTime}ms`);
        });
        next();

    }
    catch(err){
        logger("error in responceTime.js",err);
        return res.status(StatusCodes.BAD_REQUEST).json({
            code:StatusCodes.BAD_REQUEST,
            message:StatusCodes.BAD_REQUEST,
            data:err
        });
    }
}

export default responceTime;