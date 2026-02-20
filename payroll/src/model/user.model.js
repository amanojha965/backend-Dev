import fs from "fs"
 
export  function  usercreate(name, email, password){
     try {
        let ob = {
            id:Date.now(), name, email, password
        }
        let users = [];
         if(fs.existsSync("employee.json")){
            let data = JSON.parse(fs.readFileSync("employee.json", "utf-8"))
            if(!data){
                return null
            }
            users = data
         }
         users.push(ob);
         fs.writeFileSync("employee.json", JSON.stringify(users, null, 2))
         return { id: ob.id, name, email}
       
    } catch (error) {
        console.log("user create", error);
        return null
       
    }
  }


export function deleteuser(id){
    try {
        if(!fs.existsSync("employee.json")){
            return null

        }

        let  data =  JSON.parse(fs.readFileSync("employee.json", "utf-8"));
        let user = data.find((value)=> value.id ==id);
        if(!user){
            return "not found"  
        }

let users = data.filter((value)=> value.id!=id)
   fs.writeFileSync("employee.json", JSON.stringify(users, null, 2))
   return "user deleted"


    } catch (error) {
        console.log("user delete", error);
        return null
       
    }

  }



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
  data[userIndex].name = name,
  data[userIndex].email = email;

  fs.writeFileSync("employee.json", JSON.stringify(data, null, 2))
       
    } catch (error) {
        console.log("user update", error);
        return null
    }
  }

export function userlogindb(email){
    try {
        if( !fs.existsSync("employee.json")){
            return null
        }
        let data = JSON.parse( fs.readFileSync("employee.json", "utf-8"))
        let user = data.find((value)=> value.email == email);
        if(!user){
            return null
        }
        return  user || null
       
    } catch (error) {
        console.log("user search ", error);
        return null
       
    }


}