import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const fileName=fileURLToPath(import.meta.url);
const dirName=path.dirname(fileName);
const LogFolder=path.join(dirName);
const logFile=path.join(LogFolder,"logs.txt");

function logger(type,message){
    try{
        if(!fs.existsSync(LogFolder)){
            fs.mkdirSync(LogFolder,{recursive:true});
        }
        const logMessage=`[${new Date()}] [${type}]:-${message}\n`;
        fs.appendFileSync(logFile,logMessage);
        console.log("log created successfully");


    }
    catch(err){
        console.log(err);
    }
}
export default logger;
