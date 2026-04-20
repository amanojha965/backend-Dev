import fs from "fs";
import logger from "../logger/log.js";
import {StatusCodes} from "http-status-codes";


function createUser(req,res){
    try{
        let {name,email}=req.body;
        let users=[];
        let user={
            id:Date.now(),
            name:name,
            email:email
        }
        if(!name||!email){
            logger("error","all feilds are required");
            return res.status(StatusCodes.Bad_Request.code).json({
                code:StatusCodes.Bad_Request.code,
                message:StatusCodes.Bad_Request.message,
                data:null
            });

        }
        if(fs.existsSync("users.json")){
            let data=JSON.parse(fs.readFileSync("users.json","utf-8"));
            let isUser=data.find((v)=>v.email===email);
            if(isUser){
                logger("error","user already exists");
                return res.status(StatusCodes.CONFLICT.code).json({
                    code:StatusCodes.CONFLICT.code,
                    message:StatusCodes.CONFLICT.message,
                    data:null
                });
            }
            users=data;
        }
        users.push(user);
        fs.writeFileSync("users.json",JSON.stringify(users,null,2));
        logger("info","user created successfully");
        return res.status(StatusCodes.Created.code).json({
            code:StatusCodes.Created.code,
            message:StatusCodes.Created.message,
            data:users
        });
    }
    catch(err){
        logger("error in user.js",err);
        return res.status(StatusCodes.Bad_Request.code).json({
            code:StatusCodes.Bad_Request.code,
            message:StatusCodes.Bad_Request.message,
            data:err
        });
    }
}
export default createUser;