import fs from "fs";
import logger from "../logger/log.js";
import {StatusCodes} from "http-status-codes";


function filterUsers(req,res){
    const{name}=req.params;
    try{
        if(!fs.existsSync("users.json")){
            logger("err","users file not found");
            return res.status(StatusCodes.NOT_FOUND).json({
                code:StatusCodes.NOT_FOUND,
                message:StatusCodes.NOT_FOUND,
                data:null
            });
        }
        let data=JSON.parse(fs.readFileSync("users.json","utf-8"));
        let filterUser=data.filter((v)=>v.name.toLowerCase()===name.toLowerCase());
        if(!filterUser){
            logger("err","users not found")
            return res.status(StatusCodes.NOT_FOUND).json({
                code:StatusCodes.NOT_FOUND,
                message:StatusCodes.NOT_FOUND,
                data:null
            });

        }
        else{
            logger("info","users found successfully");
            return res.status(StatusCodes.OK).json({
                code:StatusCodes.OK,
                message:StatusCodes.OK,
                data:filterUser
            });
        }
    }
    catch(err){
        logger("error in user.js",err);
        return res.status(StatusCodes.BAD_REQUEST).json({
            code:StatusCodes.BAD_REQUEST,
            message:StatusCodes.BAD_REQUEST,
            data:err
        });
    }
}
export default filterUsers;
