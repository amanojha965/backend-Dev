import { deleteuser } from "../model/user.model";

export function userDeleteService(req, res){
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "User id is required" });
        }   
        const deletedUser = deleteuser(id);
        if (deletedUser === null) {
            return res.status(500).json({ message: "Something went wrong" });
        }
        if (deletedUser === "not found") {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log("delete service error", error);
        return res.status(500).json({ message: "Internal Server Error" });  
    }
}

export default userDeleteService;