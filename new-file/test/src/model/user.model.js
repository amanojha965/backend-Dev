import fs from 'fs';
import bcrypt from 'bcrypt';

export function userupdate(id,name, email ){
    try {
        if(!fs.existsSync("employee.json")){
            return null
        }
  let data = JSON.parse(fs.readFileSync("employee.json", "utf-8"));
  let user = data.find((value)=> value.id ==id);
  if(!user){
    return "not found"
  }
  let userIndex = data.findIndex((value)=> value.id==id);
  data[userIndex].name = name;
  data[userIndex].email = email;
  data[userIndex].password = bcrypt.hashSync(data[userIndex].password, 10);
   return data[userIndex];
 

  fs.writeFileSync("employee.json", JSON.stringify(data, null, 2));
       
    } catch (error) {
        console.log("user update", error);
        return null
    }
  }
