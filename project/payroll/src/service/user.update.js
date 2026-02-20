import { userupdate } from "../model/user.model.js";

export  function userUpdateService(req, res) {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!id) {
      return res.status(400).json({ message: "User id is required" });
    }

    const updatedUser =  userupdate(id, name, email, password);

    if (updatedUser === null) {
      return res.status(500).json({ message: "Something went wrong" });
    }

    if (updatedUser === "not found") {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });

  } catch (error) {
    console.log("update service error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
